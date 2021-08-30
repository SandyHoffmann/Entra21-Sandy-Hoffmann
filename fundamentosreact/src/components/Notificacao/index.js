export function Notificacao(props){
    const notificacoes = props.mensagens || [];
    return(

        <>
        {
            notificacoes.lenght>0 && 
            <p>Você tem {props.mensagens.lenght} Notificações! </p> 
        }
        </>
    );
}