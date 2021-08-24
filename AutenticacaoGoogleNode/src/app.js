const express = require('express');
// const {OAuth2Client} = require('google-auth-library');
const app = express();
// CLIENT_ID = '398550612339-hvh64v6qohvoog82vj59rn82c1ogrol8'
// const client = new OAuth2Client(CLIENT_ID);
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:3000/"
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ola aaaab");

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        console.log(ticket)
        // const payload = await ticket.getPayload();
        // const userid = await payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd']
    } catch (error) {
        console.log(error)
    }

});

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