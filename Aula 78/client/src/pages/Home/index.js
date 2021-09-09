import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

export function Home(props) {
    const { accessToken } = useAuth();
    const history = useHistory();
        
    if (accessToken) {
        return <Redirect to="/dashboard" />        
    }
    let listaTurma = [{id:uuidv4() , nomeTurma:'Turma 1'}]
    let listaAlunos = [
      {
          id:uuidv4(),
          nome: "Prova 01",
          nota: 8,
          idTurma:listaTurma[0].id
      },
      {
          id:uuidv4(),
          nome: "Prova 02",
          nota: 10,
          idTurma:listaTurma[0].id
      }
  ];
    let listaProfessores = []
    localStorage.setItem('turmas',JSON.stringify(listaTurma))
    localStorage.setItem('alunos',JSON.stringify(listaAlunos))
    localStorage.setItem('professores',JSON.stringify(listaProfessores))
    return (
      <>        
        <h1>Home</h1>
        <p>{props.text}</p>     
        <button onClick={() => history.push("/login")}>Logar</button>  
      </>
    );  
}