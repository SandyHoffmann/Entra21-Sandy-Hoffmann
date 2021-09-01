import React from "react";
import "./style.css"

export class LinhaProduto extends React.Component{
    render(){
        return( 
            <div className="LinhaProduto">
                <p>{this.props.nomeProduto}&nbsp;</p>
                <p>${this.props.precoProduto}</p>
            </div>
        )
    }
}