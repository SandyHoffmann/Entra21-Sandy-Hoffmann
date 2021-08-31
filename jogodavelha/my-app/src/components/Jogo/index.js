import React from "react";
import { Tabuleiro } from "../Tabuleiro";


export class Game extends React.Component{

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Tabuleiro />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
