import React from "react";
import { CategoriaProduto } from "../CategoriaProduto";
import { LinhaProduto } from "../LinhaProduto";
import "./style.css"
export class TabelaProdutos extends React.Component{
    
    filtragem(){
        const dicionario = [{categoria:"Sporting Goods",nomeProduto:"Football",precoProduto:"49.99",stocked: true},
                            {categoria:"Sporting Goods",nomeProduto:"Baseball",precoProduto:"9.99",stocked: true},
                            {categoria:"Sporting Goods",nomeProduto:"Basketball",precoProduto:"29.99",stocked: false},
                            {categoria:"Eletronics",nomeProduto:"Ipod Touch",precoProduto:"99.99",stocked: true},
                            {categoria:"Eletronics",nomeProduto:"iPhone 5",precoProduto:"399.99",stocked: false},
                            {categoria:"Eletronics",nomeProduto:"Nexus 7",precoProduto:"199.99",stocked: true}]
        return dicionario
    }
    listar(categoria){
        let dic = this.filtragem()
        let lista = []
        dic.map(i => {
            if (i.categoria===categoria && i.nomeProduto.toLowerCase().includes(this.props.valor.toLowerCase())){
                if (this.props.checagem){
                        if (i.stocked){
                            lista.push(<LinhaProduto key={i.nomeProduto} nomeProduto = {i.nomeProduto} precoProduto= {i.precoProduto}/>)
                        
                    } else{
                        return;
                    }
                } else{
                    lista.push(<LinhaProduto key={i.nomeProduto} nomeProduto = {i.nomeProduto} precoProduto= {i.precoProduto}/>)
                    }
                }
        })
        return lista

    }
    render(){ 
        this.listar("Sporting Goods")
        let listaEsporte = this.listar("Sporting Goods")
        let listaEletronic = this.listar("Eletronics")

        return(
            <>
            <header>
                <p>Name</p>
                <p>Price</p>
            </header>
           
            <CategoriaProduto cabecalho="Sporting Goods"/>
            {
                listaEsporte.map(i => {
                    return i
                })
            }
            
            <CategoriaProduto cabecalho="Eletronics"/>
            {
                listaEletronic.map(i => {
                    return i
                })
            }
            </>

            );
    }
}