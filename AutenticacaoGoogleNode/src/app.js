const express = require('express');
const {OAuth2Client} = require('google-auth-library');
const app = express();
require("dotenv").config;
const client = new OAuth2Client(process.env.CLIENT_ID,process.env.SECRET_CLIENT_ID);
const cors = require("cors");
const { sequelize,Usuario, Token } = require("./models");
const {queryInterface} = require("sequelize");
const jwt = require("jsonwebtoken");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(cors({
    origin: "http://localhost:5501"
}));

app.use(express.json());

async function authMiddleware(token) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID
                // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            const expiresIn = payload['exp'];
            const [usuario, NocreatedUser] = await Usuario.findOrCreate({
                where: {
                    email: payload['email']
                },
                defaults: {
                    name: payload['name']
                }
            });
            console.log(payload)
            let token_user
            if (!NocreatedUser){
                token_user = await Token.findOne({
                                    where:{
                                        UsuarioId: usuario.id
                                    }
                                });
                
                if (token_user.token == token){
                    console.log("ok")
                }
                console.log("Usuario ja foi criado!")
            }
            const [dbrefresh_token, created] = await Token.findOrCreate({
                where: {
                    UsuarioId: usuario.id
                },
                
                defaults: {
                    UsuarioId:usuario.id,
                    token: token,
                    refreshToken:userid,
                    expiresIn:expiresIn
                }
            });
            if (!created){
                await Token.update({token:token}, {
                    where: {
                        id : token_user.id
                    }
                }
                );
                
                dbrefresh_token
            }

            // if (!created) {
            //     dbrefresh_token.token = userid;
            //     dbrefresh_token.expiresIn = expiresIn;
            //     await dbrefresh_token.save();
            // }
            return userid
        } catch (error) {
            return error
        }
        
    }
app.post("/", async (req, res) => {
    let tok = req.body.token
    let auth = await authMiddleware(tok)
    console.log(auth)
    res.send("aaa")
});

app.post("/upload", async (req, res) => {
    let img = req.file.imagem
    let foto = upload.single(img)
    console.log(req.file)
} )

app.post("/loginSemGoogle", async (req, res) => {
    const keys = ['nome', 'email', 'senha','imagem'];
    const conferir = Object.keys(req.body).every(key => keys.includes(key));
    if (!conferir){
        return res.status(500).send("Você tentou colocar um campo que não existe!")
    }
    console.log(req.body.senha)
    const [usuario, NocreatedUser] = await Usuario.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            name: req.body.nome,
            email:req.body.email,
            senha:req.body.senha,
            login:'site'
        }
    });
    if (!NocreatedUser){
        return res.status(500).send("Usuario já criado!")
    }
    const token = jwt.sign({
        sub: usuario.id, login: usuario.login
    }, process.env.TOKEN_SECRET, {
        expiresIn: "60s"
    });

    const expiresIn = Date.now() + 1000 * 1000

    const refresh_token = jwt.sign({ sub: usuario.id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn
    });

    const [dbrefresh_token, created] = await Token.findOrCreate({
        where: {
            UsuarioId: usuario.id
        },
        defaults: {
            token: token,
            refreshToken:refresh_token,
            expiresIn:expiresIn
        }

        });

        if (!created) {
            dbrefresh_token.token = token;
            dbrefresh_token.expiresIn = expiresIn;
            await dbrefresh_token.save();
        }
        
    res.send("aaa")
});
    // try {
    //     const ticket = client.verifyIdToken({
    //         idToken: token,
    //         audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    //         // Or, if multiple clients access the backend:
    //         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    //     });
    //     console.log(ticket)
    //     res.send("ok")
    //     // const payload = await ticket.getPayload();
    //     // const userid = await payload['sub'];
    //     // If request specified a G Suite domain:
    //     // const domain = payload['hd']
    // } catch (error) {
    //     res.send("nope")
    //     console.log(error)
    // }



// app.get("/", async (req, res) => {
//     res.send("Ola a");

//     // try {
//     //     const ticket = await client.verifyIdToken({
//     //         idToken: token,
//     //         audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//     //         // Or, if multiple clients access the backend:
//     //         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//     //     });
//     //     console.log(ticket)
//     //     // const payload = await ticket.getPayload();
//     //     // const userid = await payload['sub'];
//     //     // If request specified a G Suite domain:
//     //     // const domain = payload['hd']
//     // } catch (error) {
//     //     console.log(error)
//     // }

// });

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`));

// https://www.youtube.com/watch?v=-yH1ZnZBWyU