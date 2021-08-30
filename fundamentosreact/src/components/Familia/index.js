import React from "react";

export function Familia(props) {
    return (
        <>
            <h2>Familia { props.sobrenome }</h2>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, {sobrenome: props.sobrenome})
                    }
                )
            }
        </>
    );
}