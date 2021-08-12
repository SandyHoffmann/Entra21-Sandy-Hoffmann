const format = require("pg-format");
const db = require("../db");
(async () => {
    try{
        const res = await db.query("SELECT NOW()")
        console.log(res.rows)
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
})();

// node ./exercicios_livraria/ex1.js