import React, { useRef, useState } from 'react';
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
  const [tarefasTodo, setTarefasTodo] = useState(["Teste 1"]);

  function enviarTarefaTodo(tituloTarefa) {
    setTarefasTodo(prev => [...prev, tituloTarefa]);
  }

  return (
    <div className="App">
      <CaixaEdicaoTexto enviar={enviarTarefaTodo} />
      <ListaTarefas tarefas={tarefasTodo} titulo="TODO" />
      <h1>DOING</h1>
      <ListaTarefas />
      <h1>DONE</h1>
      <ListaTarefas />
    </div>
  );
}

export default App;
