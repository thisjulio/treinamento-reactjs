import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

// `Caixa de edição`
// Lista de Todo (`Lista de tarefa` [ul] > Exibe `tarefas` [li])
// Lista de doing
// Lista de Done

export const CaixaEdicaoTexto = ({enviar}) => {
  const inputRef = useRef();
  return <div>
    <input ref={inputRef} type="text" placeholder="Adicione o texto da tarefa..." />
    <button onClick={()=>{
      enviar(inputRef.current.value);
      inputRef.current.value = "";
    }}>Criar</button>
  </div>
};

const Tarefa = ({texto}) => <li>{texto}</li>;

export const ListaTarefas = ({tarefas = [], titulo}) => <>
  <h1>{titulo}</h1>
  <ul>
    { tarefas.map( (textoTarefa, index) => <Tarefa key={index} texto={textoTarefa} /> ) }
  </ul>
</>;


function App() {
  return (
    <div className="App">
      <CaixaEdicaoTexto />
      <ListaTarefas tarefas={["Teste 1"]} titulo="JUNDA" />
      <h1>DOING</h1>
      <ListaTarefas tarefas={["Teste 1"]} titulo="XUBIRUBIS" />
      <h1>DONE</h1>
      <ListaTarefas tarefas={["Teste 1"]} titulo="XABLAU" />
    </div>
  );
}

export default App;
