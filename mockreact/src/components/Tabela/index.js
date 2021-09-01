import React from "react";
import { Pesquisa } from "../Pesquisa";
import { TabelaProdutos } from "../TabelaProdutos";
import "./style.css"

export class Tabela extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterText:'ball',
            isStockOnly:false
        }
    }
    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name] : value
        })

    }
    handleClick = e => {
        const value = e.target.checked;
        const name = e.target.name;
        this.setState({
            [name] : value
        })
    }
    render() {
        return(
            <>
            <div className="Tabela">
                <Pesquisa texto={this.state.filterText} valor={this.state.isStockOnly} onChange={this.handleChange} onClick={this.handleClick}/>
                <TabelaProdutos valor={this.state.filterText} checagem={this.state.isStockOnly}/>
            </div>
            </>
        )
    }
}