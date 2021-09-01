import React from "react";
import './style.css'
export class ListaTarefa extends React.Component{
    render(){
        return(
             <div className="todoapp">
                 <input type="checkbox" name="checkbox"></input>
                 <p>{this.props.conteudo}</p>
                 <button className="BotaoMenos">-</button>

             </div>
        )
    }
}
