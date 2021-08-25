const express = require('express');
const {OAuth2Client} = require('google-auth-library');
const app = express();
SECRET_CLIENT_ID = '-3uNOn1K7EC4AxAR3ROW70wA'
CLIENT_ID = '398550612339-hvh64v6qohvoog82vj59rn82c1ogrol8.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID,SECRET_CLIENT_ID);
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5501"
}));

app.use(express.json());

async function authMiddleware(token) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID
                // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            console.log(ticket)
            const payload = ticket.getPayload();
    
            return payload
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