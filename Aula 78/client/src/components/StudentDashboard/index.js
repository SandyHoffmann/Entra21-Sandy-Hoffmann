import { useState } from "react";
import { DashboardContainer } from "../DashboardContainer";
import { Prova } from "../Prova";
import "./styles.css";

export function StudentDashboard() {
    const [provas, setProvas] = useState(JSON.parse(localStorage.getItem('alunos')));
    

    return (
        <DashboardContainer title="Dashboard Aluno">
            { provas.map(prova => (
                <Prova {...prova} key={prova.id}/>
            )) }
        </DashboardContainer>
    );
}