const { Console } = require("console");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");
const chalk = require('chalk');
const { underline } = require("chalk");

fs.readFile(path.resolve(__dirname, "exercicioNomes.txt"), (err, data) => {
    if (err) {
        return console.log(err.message);
    }
    let dados = data.toString("utf-8")
    let lista = dados.split(EOL)
    nomes_a = []
    letras = ["A","C","D"]
    cores = ['red','blue','magenta']
    for(let e of lista){
        if (e[0] == "A"){
            nomes_a.push(e)
            console.log(chalk.bgRgb(255, 251, 143).underline.bold.red(e))
        }
        if (e[0] == "C"){
            nomes_a.push(e)
            console.log(chalk.bgRgb(255, 251, 143).underline.bold.blue(e))
        }
        if (e[0] == "D"){
            nomes_a.push(e)
            console.log(chalk.bgRgb(255, 251, 143).underline.bold.magenta(e))
        }
        else{
            console.log(e)
        }
    }
});
