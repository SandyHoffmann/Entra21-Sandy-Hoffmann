import React from "react";
import "./style.css"
export class Pesquisa extends React.Component{
    // constructor(props){
    //     super(props);
    // }
   
    render() {
        return(
            <div>
            <input type="text" value={this.props.texto} className="Pesquisa" onChange={this.props.onChange} name="filterText"></input>
            <div>
            <input type="checkbox" name="checkbox" checked={this.props.valor} name="isStockOnly" onClick={this.props.onClick}></input>
            <label for="checkbox">Only show products in stock</label>
            </div>
            </div>
        );
    }
}