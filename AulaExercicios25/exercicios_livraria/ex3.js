const db = require("../db");
const format = require("pg-format");
let cliente = {nome:"claudiaaao",email:"a@a",telefone:"33333333",numero_documento:"123456",tipo_pessoa:"fisica",rua:"ASSSsssaa",numero:123,cidade:"aa",estado:"aaa",cep:"fff"};
async function insereCliente(cliente){
    try{
        let dados_cl = [[cliente.nome,cliente.email,cliente.telefone,cliente.numero_documento,cliente.tipo_pessoa]];
        querc = format("INSERT INTO clientes (nome,email,telefone,numero_documento,tipo_pessoa) VALUES %L RETURNING id",dados_cl);
        ins = await db.query(querc);
        let dados_end = [[cliente.rua,322,cliente.cidade,cliente.estado,cliente.cep,ins.rows[0].id]];
        console.log(dados_end);
        quere = format("INSERT INTO enderecos (rua,numero,cidade,estado,cep,id_cliente) VALUES %L RETURNING *",dados_end);
        ins2 = await db.query(quere);
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
async function mostraCliente(){
    try{
        const {rows} = await db.query('SELECT * FROM enderecos')
        console.log(rows)

    }
    catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}


async function deletarTodos(){
    try{
        await db.query('DELETE FROM enderecos')
        await db.query('DELETE FROM clientes')

    }
    catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
insereCliente(cliente)