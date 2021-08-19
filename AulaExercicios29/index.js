const express = require('express');
const app = express();
const port = 3000;
const usuariosRoutes = require("./routes/usuariosRoutes");

//midlewhere
app.use(express.json());
app.use("/usuarios",usuariosRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
  
app.post('/', (req, res) => {
    res.send('post endpoint');
  });
    
app.put('/', (req, res) => {
    res.send('put endpoint');
  });
    
app.delete('/', (req, res) => {
    res.send('delete endpoint');
  });

app.listen(port, () => {
  console.log(`Esta rodando em http://localhost:${port}`)
});