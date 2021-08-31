import './App.css';
import { Aluno } from './components/Aluno';
import { Card } from './components/Card';
import { ComProps } from './components/ComProps';
import { Familia } from './components/Familia';
import { ListaAlunos } from './components/ListaAlunos';
import { ManipulandoEventos } from './components/ManipulandoEventos';
import { MembroFamilia } from './components/MembroFamilia';
import { Notificacao } from './components/Notificacao';
import { ParOuImpar } from './components/ParOuImpar';
import PrimeiroComponente from './components/PrimeiroComponente';
import { Relogio } from './components/Relogio';
import { ValorAleatorio } from './components/ValorAleatorio';
import { ComponentesControlados } from './components/ComponentesControlados';
import { Contador } from './components/Contador';

function App() {
  return (
    <div className="App">
      <h1>Ola</h1>
      <div className="cards">
      <Card titulo="Primeiro Componente" cor="pink">
      <PrimeiroComponente/>
      </Card>
      <Card titulo="Com props">
      <ComProps mensagem="Estou sendo enviado pelas props"/>
      </Card>
      <Card titulo="Com props dnv" cor="purple">
        <ComProps mensagem="Outra mensagem!"/>
      </Card>
      <Card titulo="Media Pedro" cor="orange">
        <Aluno nome="Pedro" media={9.5} />
      </Card>
      <Card titulo="Media Maria" cor="red">
        <Aluno nome="Maria" media={5} />
      </Card>
      <Card titulo="Lista Alunos" cor="blue">
           <ListaAlunos/>
      </Card>
      <Card titulo="Familia da Silva" cor="coral">

      <Familia sobrenome="da Silva">
        <MembroFamilia nome = "Ana"/>
        <MembroFamilia nome = "Marcoss"/>
        <MembroFamilia nome = "José"/>
      </Familia>
      </Card>
      <Card titulo="Renderização Par ou Impar?">
        <ParOuImpar numero={10}/>
        <ParOuImpar numero={3}/>
        <hr></hr>
        <Notificacao mensagens={["Oi"]}/>
      </Card>
      <Card titulo="Manipulando Eventos">
        <ManipulandoEventos/>
      </Card>
      <Card titulo="State">
        <Relogio/>
        <hr/>
        <ValorAleatorio/>
      </Card>
      <Card titulo="Componente Controlado">
        <ComponentesControlados/>
      </Card>
      <Card titulo="State Assincrono">
        <Contador/>
      </Card>
      </div>
    </div>
  );
}

export default App;
// npx react-create-app .