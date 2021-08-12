const db = require("../db");
const format = require("pg-format");
let clientes = [{nome:"claudiaaao",email:"a@a",telefone:"33333333",numero_documento:"123456",tipo_pessoa:"fisica",rua:"ASSSsssaa",numero:123,cidade:"aa",estado:"aaa",cep:"fff"},
{nome:"anana",email:"2#4@ga",telefone:"444532",numero_documento:"122221",tipo_pessoa:"fisica",rua:"jjjjjj",numero:678,cidade:"dd",estado:"ggg",cep:"aaa"}];
async function insereClientes(clientes){
    try{
        let dados = []
        for (let i of clientes){
            let_nova_lista = [i.nome,i.email,i.telefone,i.numero_documento,i.tipo_pessoa]
            dados.push(let_nova_lista)
        }
        querc = format("INSERT INTO clientes (nome,email,telefone,numero_documento,tipo_pessoa) VALUES %L RETURNING id",dados);
        ins = await db.query(querc);
        console.log(ins.rows[0].id)
        // let dados_end = [[cliente.rua,322,cliente.cidade,cliente.estado,cliente.cep,ins.rows[0].id]];
        // console.log(dados_end);
        // quere = format("INSERT INTO enderecos (rua,numero,cidade,estado,cep,id_cliente) VALUES %L RETURNING *",dados_end);
        // ins2 = await db.query(quere);
    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
}
insereClientes(clientes)