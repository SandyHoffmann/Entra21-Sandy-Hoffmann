import React from "react";
import { Quadrado } from "../Quadrado";

export class Tabuleiro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quadrados:Array(9).fill(null),
            xIsNext:true
        };
    }

    handleClick(i) {
        const quadrados = this.state.quadrados.slice();
        if (this.calcularGanhador(quadrados) || quadrados[i]){
            return;
        }
        quadrados[i] = this.state.xIsNext?'X':'O';
        this.setState({quadrados: quadrados,xIsNext:!this.state.xIsNext});
    }
    renderQuadrado(i) {
      return <Quadrado value={this.state.quadrados[i]}
      onClick={() => this.handleClick(i)}/>;
    }
    calcularGanhador(quadrados) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
              return quadrados[a];
            }
          }
          return null;
    }
    render() {
      const ganhador = this.calcularGanhador(this.state.quadrados);
      let status;
      if (ganhador){
          status = 'Winner: ' + ganhador;
      } else{
          status = 'Next player: '+ (this.state.xIsNext?'X':'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderQuadrado(0)}
            {this.renderQuadrado(1)}
            {this.renderQuadrado(2)}
          </div>
          <div className="board-row">
            {this.renderQuadrado(3)}
            {this.renderQuadrado(4)}
            {this.renderQuadrado(5)}
          </div>
          <div className="board-row">
            {this.renderQuadrado(6)}
            {this.renderQuadrado(7)}
            {this.renderQuadrado(8)}
          </div>
        </div>
      );
    }
  }