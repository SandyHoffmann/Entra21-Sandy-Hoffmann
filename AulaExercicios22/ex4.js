const fsPromises = require("fs/promises");
const path = require("path");

async function obterArquivos(nomeDir){
    const nomePasta = path.resolve(__dirname, "..", nomeDir);
    const files = await fsPromises.readdir(nomePasta);
    return Promise.resolve(files)
}
obterArquivos('AulaExercicios22')
    .then(files => console.log(files))
    .catch(error => console.log(error.message))