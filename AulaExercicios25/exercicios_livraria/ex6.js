const db = require("../db");
const format = require("pg-format");
let livros = [{nome_autor:"autor 1",assunto:"magia",preco:12.90,quantidade_estoque:6,id_editora:'403dc95b-a0c1-49a0-a544-dc8b1159186f'},
                {nome_autor:"autor 2",assunto:"fábula",preco:22.22,quantidade_estoque:8,id_editora:'4a56df92-efea-4d98-8ec9-f9f091ba98f0'},
                {nome_autor:"autor 3",assunto:"terror",preco:33.33,quantidade_estoque:10,id_editora:'4a56df92-efea-4d98-8ec9-f9f091ba98f0'},
                {nome_autor:"autor 4",assunto:"comédia",preco:282.99,quantidade_estoque:11,id_editora:'4dcb1054-5707-424f-b9b1-f1883429ca8f'},
                {nome_autor:"autor 5",assunto:"sobrenatural",preco:66.6,quantidade_estoque:12,id_editora:'70d068fb-dd73-4a65-9308-7d56ba81a8b4'}]
async function inserelivros(livros){
    let dados = []
    try{
        for (let e of livros){
            lista = [e.nome_autor,e.assunto,e.preco,e.quantidade_estoque,e.id_editora]
            dados.push(lista)
        }
        console.log(dados)
        querc = format("INSERT INTO livros (nome_autor,assunto,preco,quantidade_estoque,id_editora) VALUES %L",dados);
        ins = await db.query(querc);
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
inserelivros(livros)