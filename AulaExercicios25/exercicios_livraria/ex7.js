const db = require("../db");
const format = require("pg-format");
let livros = [['1511e53f-a56e-4d52-b7e0-3249c555a0c1'],['4e7d73b3-1b89-4677-91e3-32460f8795dd']];
async function obtemLivros(livros){
    try{
        querc = format("SELECT * FROM livros WHERE isbn in (%L)",livros);
        const { rows } = await db.query(querc);
        console.log(querc);
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
obtemLivros(livros)