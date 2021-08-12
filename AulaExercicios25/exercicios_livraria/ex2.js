const db = require("../db");
(async () => {
    try{
        await db.query(`
        CREATE TABLE IF NOT EXISTS clientes (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome text NOT NULL,
            email text NOT NULL,
            telefone text NOT NULL,
            numero_documento text NOT NULL,
            tipo_pessoa text NOT NULL,
            pontos integer DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS enderecos (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rua text NOT NULL,
            numero integer NOT NULL,
            cidade text NOT NULL,
            estado text NOT NULL,
            cep text NOT NULL,
            id_cliente UUID NOT NULL REFERENCES clientes
        );
      
        CREATE TABLE IF NOT EXISTS editoras (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome_gerente text NOT NULL,
            telefone text NOT NULL
        );

        CREATE TABLE IF NOT EXISTS livros (
            isbn UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome_autor text NOT NULL,
            assunto text NOT NULL,
            quantidade_estoque integer NOT NULL,
            preco numeric NOT NULL,
            id_editora UUID NOT NULL REFERENCES editoras
        );

        CREATE TABLE IF NOT EXISTS compras (
            id_clientes UUID,
            id_livro UUID,
            data date,
            PRIMARY KEY(id_clientes,id_livro,data),
            valor numeric NOT NULL,
            FOREIGN KEY(id_clientes) REFERENCES clientes,
            FOREIGN KEY(id_livro) REFERENCES livros(isbn)
        );
        `)
        console.log("Tabelas criadas com sucesso!")

    } catch (error){
        console.log(error.message)
    }
    finally{
        db.end();
    }
})();
