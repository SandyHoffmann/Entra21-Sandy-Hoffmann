import React from "react";
import './style.css'

export class BarraPesquisa extends React.Component{
    render(){
        return(
            <div className="DivBarraPesquisa">
                <input type="text" className="BarraPesquisa"></input>
                <button className="BotaoMais">+</button>
            </div>
        );
    }
}