import React from "react";
import "./style.css"
export class CategoriaProduto extends React.Component{
    
    render(){
        return(
            <>
                <p className="Cabecalho">{this.props.cabecalho}</p>
            </>
        )
    }
}