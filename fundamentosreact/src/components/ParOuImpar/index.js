export function ParOuImpar(props){
    return (
        <>
        {
            props.numero % 2 === 0?
            <p>O Numero {props.numero} é Par</p>:<p>O Numero {props.numero} é Impar</p>
        }
        </>
    );
}