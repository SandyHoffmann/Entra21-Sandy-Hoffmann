const { Pool } = require("pg");
const format = require("pg-format");
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123456",
    database: "node"
});

(async () => {
    // try{
    //     const res = await pool.query("SELECT NOW()")
    //     let r = res.rows[0].now
    //     console.log(r)
    //     let str = String(r)
    //     lista = str.split(" ")
    //     console.log(lista[3])
    // } catch (error){
    //     console.log(error.message)
    // }
    // finally{
    //     pool.end();
    // }
    // try{
    //     await pool.query(`
    //     CREATE TABLE IF NOT EXISTS funcionarios (
    //         id SERIAL PRIMARY KEY,
    //         nome text NOT NULL,
    //         email text NOT NULL UNIQUE,
    //         telefone text NOT NULL UNIQUE
    //     );

    //     CREATE TABLE IF NOT EXISTS enderecos (
    //         id SERIAL PRIMARY KEY,
    //         rua text NOT NULL,
    //         numero integer NOT NULL,
    //         cidade text NOT NULL,
    //         estado text NOT NULL,
    //         id_funcionario integer NOT NULL REFERENCES funcionarios
    //     );
    //     `)
    //     console.log("Tabelas criadas com sucesso!")
    // } catch (error){
        
    // }
    // finally{
    //     pool.end();
    // }
    // try{
    //     const res = await pool.query(`
    //     INSERT INTO funcionarios(nome,email,telefone) VALUES
    //         ($1,$2,$3)
    //     RETURNING *;
    //     `,["pedro","pedroaa@gmail.com","(47) 9 993399 9999"])
    //     console.log(res.rows[0])
    // } catch (error){
    //     console.log(error.message)
    // }
    // finally{
    //     pool.end();
    // }

    // try{

    //     const funcionarios = [
    //         ["Joana", "ddd@ddd","33442244"],
    //         ["Ana", "aaa@aaa","54345346"]
    //     ];
    //     const query = format("INSERT INTO funcionarios (nome,email,telefone) VALUES %L RETURNING *",funcionarios)
    //     const res = await pool.query(query)
    //     console.log(res.rows)
    // } catch (error){
    //     console.log(error.message)
    // }
    // finally{
    //     pool.end();
    // }
    try{
        const {rows} = await pool.query(`SELECT * FROM funcionarios WHERE nome ILIKE $1`,['%a'])
        console.log(rows)
    } catch (error){
        console.log(error.message)
    }
    finally{
        pool.end();
    }

})();

// node index.js