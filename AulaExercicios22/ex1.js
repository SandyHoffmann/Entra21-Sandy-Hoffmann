
const os = require("os")
const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

function conferirMem(){
    let freeMemoryInBytes = os.freemem();
    let totalMemoryInBytes = os.totalmem();

    let memoriaTotal = parseInt(totalMemoryInBytes / 1024 / 1024)
    let memoriaLivre = parseInt(freeMemoryInBytes / 1024 / 1024)
    let usoDeMemoria = (memoriaLivre*100)/memoriaTotal 
    return `"total_memory"${memoriaTotal} MB, "free_memory":${memoriaLivre} MB, "usage":${Math.floor(usoDeMemoria)} %`
}
console.log(conferirMem())

setInterval(escrever, 5000);

async function escrever(){
    const novoConteudo = EOL + conferirMem()
    try {
        await fsPromises.appendFile(path.resolve(__dirname, "log.txt"), novoConteudo);
        console.log("Novo conteúdo adicionado (Promise)");
    } catch(err) {
        console.log(err.message);
    }
}
/*
Exercício:

1. Crie um script que irá salvar as informações de memória a cada 5 segundos em um arquivo chamado log.txt

As informações devem ser salvas no seguinte formato:
{"total_memory":"xx MB", "free_memory":"xx MB", "usage":"xx %"}

Onde:
    * total_memory: Quantidade total de memória.
    * free_memory: Quantidade de memória livre.
    * usage: Porcentagem de uso da memória.

*/