/*2) Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
não exista a função deve retornar undefined.

Se o usuário existir mostrar as informações do usuário no seguinte formato:
Usuário encontrado: 
nome: [nome do usuário]
idade: [idade do usuário]
email: [email do usuário]

Caso o usuário não existir mostrar a mensagem: "Usuário não foi encontrado."

Obs.: Nome e sobrenome.
*/

const { Console } = require("console");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

async function ler(){
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "users.json"));
        // console.log(data.toString("utf-8"))
        let jsonn = JSON.parse(data)
        return jsonn
    } catch (err) {
        console.log(err.message);
    }
}

async function getUserByName(name){
    let dados = await ler()
    for (let e of dados){
        if (e.nome == name){
            console.log(`nome: ${e.nome}`)
            console.log(`idade: ${e.idade}`)
            console.log(`email: ${e.email}`)
            return true
        }
    }
    console.log("Usuário não foi encontrado.")
    return undefined

}

getUserByName('Maria')