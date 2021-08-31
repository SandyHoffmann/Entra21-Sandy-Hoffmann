import React from "react";
import "../css.css"

export function Quadrado(props){

    return(
        <button className="quadrado" onClick={props.onClick}>
            {props.value}
        </button>
    )
}