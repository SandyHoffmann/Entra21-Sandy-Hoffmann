const db = require("../db");
const format = require("pg-format");
let clientes = [{nome:"claudia",email:"a@a",telefone:"33333333",numero_documento:"123456",tipo_pessoa:"fisica",rua:"rua 1",numero:123,cidade:"cidade 1",estado:"estado 1",cep:"123"},
{nome:"anana",email:"2#4@ga",telefone:"444532",numero_documento:"122221",tipo_pessoa:"fisica",rua:"rua 2",numero:678,cidade:"cidade 2",estado:"estado 2",cep:"456"},{nome:"jorge",email:"j@jj",telefone:"33336666",numero_documento:"098765",tipo_pessoa:"juridica",rua:"rua 3",numero:123,cidade:"cidade 3",estado:"estado 3",cep:"321"},
{nome:"halena",email:"hhh@ghha",telefone:"54332222",numero_documento:"76536",tipo_pessoa:"fisica",rua:"rua 4",numero:554,cidade:"cidade 4",estado:"estado 4",cep:"09876"}];

async function insereClientes(clientes){
    try{
        let dados = []
        let dados_end = []
        for (let i of clientes){
            nova_lista = [i.nome,i.email,i.telefone,i.numero_documento,i.tipo_pessoa]
            dados_d = [i.rua,322,i.cidade,i.estado,i.cep];
            dados.push(nova_lista)
            dados_end.push(dados_d)
        }
        querc = format("INSERT INTO clientes (nome,email,telefone,numero_documento,tipo_pessoa) VALUES %L RETURNING id",dados);
        ins = await db.query(querc);
        console.log(ins.rows[0])
        for (let e = 0; e < ins.rows.length; e++){
            dados_end[e].push(ins.rows[e].id)
        }
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
// insereClientes(clientes)