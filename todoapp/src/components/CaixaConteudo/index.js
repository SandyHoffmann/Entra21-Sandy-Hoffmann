import React from "react";
import { BarraPesquisa } from "../BarraPesquisa";
import { ListaTarefa } from "../ListaTarefas";
import './style.css';

export class CaixaConteudo extends React.Component{
    render(){
        return(
            <div className="Conteudo">
                <h1>TODO APP</h1>
                <BarraPesquisa/>
                <ListaTarefa conteudo="Comprar Pão"/>
            </div>
        )
    }
}