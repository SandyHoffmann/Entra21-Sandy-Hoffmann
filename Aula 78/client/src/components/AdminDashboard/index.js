import { DashboardContainer } from "../DashboardContainer";
import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Turma } from "../Turma";

export function AdminDashboard() {
    const [nomeTurma, setNomeTurma] = useState("");
    const [nomeProfessor, setnomeProfessor] = useState("");
    const [nomeAluno, setnomeAluno] = useState("");
    const [idTurmaAluno, setIdTurmaAluno] = useState("");
    const [valueSelectAluno, setValueSelectAluno] = useState("");

    async function cadastraTurma(e){
        e.preventDefault();   
        try {
            let turmas_anteriores = JSON.parse(localStorage.getItem('turmas'))
            let turma = {
                id: uuidv4(),
                nomeTurma: nomeTurma
            }
            turmas_anteriores.push(turma)
            localStorage.setItem('turmas',JSON.stringify(turmas_anteriores))
            console.log("Deu bom!")
        } catch (error) {
            console.log(error)
        }
    }

    async function cadastraProfessor(e){
        e.preventDefault();   
        try {
            let professores_anteriores = JSON.parse(localStorage.getItem('professores'))
            let professor = {
                id: uuidv4(),
                nomeProfessor: nomeProfessor,
                idTurma : idTurmaAluno
            }
            professores_anteriores.push(professor)
            localStorage.setItem('professores',JSON.stringify(professores_anteriores))
            console.log("Deu bom!")
        } catch (error) {
            console.log(error)
        }
    }

    async function cadastraAluno(e){
        e.preventDefault();   
        try {
            let turmas_anteriores = JSON.parse(localStorage.getItem('turmas'))
            let turma = {
                id: uuidv4(),
                nomeTurma: nomeTurma
            }
            turmas_anteriores.push(turma)
            localStorage.setItem('turmas',JSON.stringify(turmas_anteriores))
            console.log("Deu bom!")
        } catch (error) {
            console.log(error)
        }
    }

    let turmas = JSON.parse(localStorage.getItem('turmas'))
    console.log(turmas)
    return (

        <DashboardContainer title="Dashboard Admin">
            <form onSubmit={cadastraTurma}>
                <input type="text" value={nomeTurma} onChange={e => setNomeTurma(e.target.value)}></input>
                <button>Cadastrar turma</button>           
            </form>
            <form onSubmit={cadastraProfessor}>
                <input type="text" value={nomeProfessor} onChange={e => setnomeProfessor(e.target.value)}></input>
                <select value={valueSelectAluno} onChange={e => setValueSelectAluno(e.target.value)}>
                    { turmas.map(turma => (
                    <Turma {...turma} key={turma.id}/>
                    )) }
                </select>
                <button>Cadastrar professor</button>
            </form>
            <form onSubmit={cadastraAluno}>
                <input type="text" value={nomeAluno} onChange={e => setnomeAluno(e.target.value)}></input>
                <input type="text" value={idTurmaAluno} onChange={e => setIdTurmaAluno(e.target.value)}></input>
                <button>Cadastrar aluno</button>
            </form>
        </DashboardContainer>
    );
}