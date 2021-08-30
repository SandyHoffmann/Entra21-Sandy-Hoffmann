import { Aluno } from "../Aluno";

const alunos = [
    {id : 1, nome : "Pedro", media: 9.5},
    {id : 2, nome : "Maria", media: 8.5},
    {id : 3, nome : "Josué", media: 4}
];

export function ListaAlunos(){
    return (
        <>
        {
            alunos.map(aluno => {
                return(
                    <Aluno key={aluno.id} nome={aluno.nome} media={aluno.media}/>
                )
            })
        }
        </>
    );
}