const db = require("../db");
const format = require("pg-format");
let editoras = [{nome_gerente:"gerente 1",telefone:"33334360"},
                {nome_gerente:"gerente 2",telefone:"33334756"},
                {nome_gerente:"gerente 3",telefone:"3354433"},
                {nome_gerente:"gerente 4",telefone:"33334533"},
                {nome_gerente:"gerente 5",telefone:"33335777"}]
async function insereEditoras(editoras){
    let dados = []
    try{
        for (let e of editoras){
            lista = [e.nome_gerente,e.telefone]
            dados.push(lista)
        }
        console.log(dados)
        querc = format("INSERT INTO editoras (nome_gerente,telefone) VALUES %L",dados);
        ins = await db.query(querc);
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
insereEditoras(editoras)