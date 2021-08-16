const db = require("../db");
const format = require("pg-format");
const chalk = require('chalk');

async function obtemMelhorCliente(){
    try{
        let compras = format("SELECT id,nome,telefone,email,max(pontos) as pontos FROM clientes GROUP BY id ORDER BY pontos DESC LIMIT 1;");
        const {rows} = await db.query(compras)
        let cliente =[[rows[0].id]]
        console.log(chalk.red(`Melhor Cliente - ${rows[0].nome}`))
        console.log(`-------------- - Telefone ${rows[0].telefone}`)
        console.log(`-------------- - Email ${rows[0].email}`)
        console.log(`-------------- - Pontos ${rows[0].pontos}`)
        let valorcompras = format("SELECT data,valor,id_livro FROM compras WHERE id_clientes in (%L);",cliente);
        let colunm = await db.query(valorcompras)
        console.log(`${chalk.red('Livros Comprados --------------')}`)
        for (let r of colunm.rows){
            id = [[r.id_livro]]
            livro = format("SELECT assunto FROM livros WHERE isbn in (%L);",id);
            let coluna_livro = await db.query(livro)
            console.log(`-------------- - nome ${coluna_livro.rows[0].assunto}`)
            console.log(`-------------- - data ${r.data}`)
            console.log(`-------------- - valor ${r.valor}`)
        }
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}



obtemMelhorCliente()