const db = require("../db");
const format = require("pg-format");
let datas = {data:'2021-08-13'}
async function obtemComprasPorData(datas){
    try{
        let data = [datas.data]
        let compras = format("SELECT * FROM compras WHERE data in (%L);",data);
        const {rows} = await db.query(compras)
        console.log(rows)
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
obtemComprasPorData(datas)