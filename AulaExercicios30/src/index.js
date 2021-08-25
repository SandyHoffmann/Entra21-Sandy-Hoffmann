const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { User, RefreshToken } = require("./models");
const jwt = require("jsonwebtoken");
const user = require("./models/user");
const db = require("../../AulaExercicios29/db/models");
require("dotenv").config;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ola a");
});

function authMiddleware(permissions) {
    return (req, res, next) => {
        const authToken = req.headers.authorization?.replace("Bearer ", "");

        if (!authToken) {
            res.status(401).json({ message: "Token is missing" });
        }
    
        try {
            const payload = jwt.verify(authToken, process.env.TOKEN_SECRET);
            if (!permissions.includes(payload.role)){
                return res.status(403).json({message:"You don't have permission! "});
            }
            res.locals.userId = payload.sub;
            
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({ message: "Invalid Token!" });
        }
    }
};

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email }
        });
        if (!user) {
            return res.status(400).json({ message: "E-mail or Password Incorrect! " });
        };
        if (!user.verifyPassword(password)) {
            return res.status(400).json({ message: "E-mail or Password Incorrect! " });
        };
        //Emitir tokens
        //emitindo access token  
        const token = jwt.sign({
            sub: user.id, role: user.role
        }, process.env.TOKEN_SECRET, {
            expiresIn: "20s"
        });

        const expiresIn = Date.now() + 1000 * 60

        const refresh_token = jwt.sign({ sub: user.id }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn
        });

        const [dbrefresh_token, created] = await RefreshToken.findOrCreate({
            where: {
                user_id: user.id
            },
            defaults: {
                token: refresh_token,
                expiresIn
            }

        });

        if (!created) {
            dbrefresh_token.token = refresh_token;
            dbrefresh_token.expiresIn = expiresIn;

            await dbrefresh_token.save();
        }
        res.json({ token, refresh_token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed!" });
    }

});

app.post("/refresh", async (req, res) => {

    try {
        const token = req.body.refreshToken || "";

        const refresh_token = await RefreshToken.findOne({
            where: {
                token
            },
            include: "user"
        });

        if (!refresh_token) {
            res.status(401).json({ message: "Token invalid! " })
        }
        const expiresIn = Date.now() + 1000 * 60

        const tokenNovo = jwt.sign({ sub: refresh_token.user.id }, process.env.TOKEN_SECRET, {
            expiresIn: "20s"
        });

        const newRefreshToken = jwt.sign({ sub: refresh_token.user.id }, process.env.TOKEN_SECRET, {
            expiresIn
        });

        refresh_token.token = newRefreshToken;

        refresh_token.expiresIn = expiresIn;

        refresh_token.save();

        console.log(refresh_token);
        res.send({ tokenNovo, newRefreshToken });
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Something bad happened! " })
    }

});

app.get("/users", authMiddleware(["admin"]), async (req, res) => {
    try {
        console.log(res.locals.userId);
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed!" })
    }
});


app.post("/users", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const [user, created] = await User.findOrCreate({
            where: {
                email
            },
            defaults: {
                name,
                password,
                role: "user"
            }
        });
        if (!created) {
            res.status(409).json({ message: "Email already exists! " });
        }
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Failed!" });
    }



});

app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`))