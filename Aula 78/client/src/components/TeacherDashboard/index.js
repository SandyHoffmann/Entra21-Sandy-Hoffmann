import { useState } from "react";
import { DashboardContainer } from "../DashboardContainer";
import { StudentDashboard } from "../StudentDashboard";
import { v4 as uuidv4 } from 'uuid';
import "./styles.css";

export function TeacherDashboard() {
    const [nome, setNome] = useState("");
    const [nota, setNota] = useState("");

    async function handleSubmit(e){
        e.preventDefault();   
        try {
            let provas_anteriores = JSON.parse(localStorage.getItem('alunos'))
            let prova = {
                id: uuidv4(),
                nome: nome,
                nota: nota
            }
            provas_anteriores.push(prova)
            localStorage.setItem('alunos',JSON.stringify(provas_anteriores))
            console.log("Deu bom!")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <DashboardContainer title="Dashboard Teacher">
            <form onSubmit={handleSubmit}>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
                <input type="number" value={nota} onChange={e => setNota(e.target.value)}></input>
                <button>Enviar Prova</button>
            </form>
            <div>
                <p>Ver os alunos cadastrados na turma</p>            
                <button>Cadastrar nota de prova</button>
            </div>
        </DashboardContainer>
    );
}