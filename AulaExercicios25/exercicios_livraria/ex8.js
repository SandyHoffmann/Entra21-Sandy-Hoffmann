const db = require("../db");
const format = require("pg-format");
let dados_compra = {id_cliente:'29156eb3-3f6e-4c93-94cf-03b9f43ef4ee',isbn:'b456179c-7ea5-4f1e-8487-b450c9348b2d',data:'now()'}
async function comprar(dados_compra){
    try{
        await db.query("BEGIN;")
        console.log(dados_compra.isbn)
        let id_livro = [dados_compra.isbn]
        let valor = format("SELECT preco FROM livros WHERE isbn in (%L);",id_livro);
        const {rows} = await db.query(valor)
        console.log(rows[0].preco)
        let dados = [[dados_compra.id_cliente,dados_compra.isbn,dados_compra.data,rows[0].preco]]
        let consulta = format("INSERT INTO compras (id_clientes,id_livro,data,valor) VALUES %L RETURNING *",dados)
        const {rows2} = await db.query(consulta)
        console.log(rows2)
        let pontos = Math.floor((rows[0].preco)/10)
        let id_cliente = dados_compra.id_cliente
        let update = format("UPDATE clientes SET pontos = pontos + cast(%L AS INTEGER) WHERE id in (%L)",pontos,id_cliente);
        const {rows3} = await db.query(update)
        console.log(update)
        await db.query("COMMIT;")
    } catch (error){
        await db.query("ROLLBACK;")
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
comprar(dados_compra)