const db = require("../db");
const format = require("pg-format");
const {comprasPorCliente} = require("./ex9.js");
async function obtemMelhorCliente(db){
    try{
        let compras = format("SELECT id,nome,telefone,email,max(pontos) FROM clientes GROUP BY id ORDER BY pontos DESC LIMIT 1;");
        const {rows} = await db.query(compras)
        let cliente = rows[0].id
        compra = await comprasPorCliente([{id_cliente:cliente}])
        console.log(compra)
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
obtemMelhorCliente()