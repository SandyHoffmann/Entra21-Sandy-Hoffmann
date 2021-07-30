const { Console } = require("console");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

fs.readFile(path.resolve(__dirname, "exercicioNomes.txt"), (err, data) => {
    if (err) {
        return console.log(err.message);
    }
    let dados = data.toString("utf-8")
    let lista = dados.split(EOL)
    nomes_a = []
    for(let e of lista){
        if (e[0] == "A"){
            nomes_a.push(e)
        }
    }
    console.log(nomes_a)
});