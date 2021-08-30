import "./styles.css";

function PrimeiroComponente() {
    const message = ":3";
    return (
        <>
            <h2>Primeiro Componente</h2>
            <p className="emoji">{ message }</p>
        </>
    );
}

export default PrimeiroComponente;
