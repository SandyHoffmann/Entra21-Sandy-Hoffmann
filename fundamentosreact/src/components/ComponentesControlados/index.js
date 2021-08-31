import React from "react";

export class ComponentesControlados extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nome: "",
            email: "",
            cpf: "",
            sexo: "",
            cidade:""
        }
    }
    // handleChangeNome = e => {
    //     this.setState({
    //         nome:e.target.value
    //     });
    // }

    // handleChangeEmail = e => {
    //     this.setState({
    //         email:e.target.value
    //     });
    // }
    
    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name] : value
        })

    }

    render(){
        return(
            <form>
                <label>
                    Nome:
                <input type="text" name = "nome" onChange={this.handleChange} value={this.state.nome}></input>
                </label>
                <label>
                    Email:
                <input type="email" name = "email" onChange={this.handleChange} value={this.state.email}></input>
                </label>
                <label>
                    CPF:
                <input type="text" name = "cpf" onChange={this.handleChange} value={this.state.cpf}></input>
                </label>
                <label>
                    Sexo:
                <input type="radio" name="sexo" value="feminino" onClick={this.handleChange} /> Feminino
                <input type="radio" name="sexo" value="masculino" onClick ={this.handleChange} /> Masculino
                </label>
                <select name="cidade" onChange={this.handleChange}>
                    <option value="blumenau">Blumenau</option>
                    <option value="indaial">Indaial</option>
                    <option value="timbó">Timbo</option>

                </select>
                <button>Enviar</button>

            </form>
        )
    }
}