const db = require("../db");
const format = require("pg-format");
let dados_compra = {id_cliente:'29156eb3-3f6e-4c93-94cf-03b9f43ef4ee'}
async function comprasPorCliente(dados_compra){
    try{
        let id_cliente = [dados_compra.id_cliente]
        let valor = format("SELECT * FROM compras WHERE id_clientes in (%L);",id_cliente);
        const {rows} = await db.query(valor)
        return(rows)
    } catch (error){
        return(error.message)
    }
    finally{
        db.end();
    }
}
// comprasPorCliente(dados_compra)

module.exports = {comprasPorCliente};