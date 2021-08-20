const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const port = 3000;
const cors = require("cors")
const usuariosRoutes = require("./routes/usuariosRoutes");
const projetosRoutes = require("./routes/projetosRoutes");

app.use(morgan("dev"));
app.use(helmet());

//midlewhere
app.use(cors({
  origin: "http://127.0.0.1:5501"
}));
app.use(express.json());
app.use("/usuarios", usuariosRoutes);
app.use("/projetos", projetosRoutes);


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

//middlewhere tratamento de erros (posição importa)
app.use((error, req, res, next) => {
  res.status(error.status);
  res.json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Esta rodando em http://localhost:${port}`)
});