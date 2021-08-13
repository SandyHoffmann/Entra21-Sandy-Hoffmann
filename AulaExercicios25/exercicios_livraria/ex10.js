const db = require("../db");
const format = require("pg-format");
let dados_compra = {id_editora:'70d068fb-dd73-4a65-9308-7d56ba81a8b4'}
async function comprasPorEditora(dados_compra){
    try{
        let id_editora = [dados_compra.id_editora]
        let livros = format("SELECT * FROM livros WHERE id_editora in (%L);",id_editora);
        const {rows} = await db.query(livros)
        console.log(rows)
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
comprasPorEditora(dados_compra)