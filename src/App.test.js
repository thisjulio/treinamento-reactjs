import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { ListaTarefas, CaixaEdicaoTexto } from './App';

test('APP deve exibir lista de TODO, DOING e DONE', () => {
  const { getByText } = render(<App />);

  const ElementTODOListTitle = getByText(/TODO/, {selector: "h1"});
  const ElementDOINGListTitle = getByText(/DOING/, {selector: "h1"});
  const ElementDONEListTitle = getByText(/DONE/, {selector: "h1"});

  expect(ElementTODOListTitle).toBeInTheDocument();
  expect(ElementDOINGListTitle).toBeInTheDocument();
  expect(ElementDONEListTitle).toBeInTheDocument();
});

test('Lista de tarefa deve exibir ul com as tarefas em li', () => { 
  const { getByText } = render(<ListaTarefas titulo="TODO" tarefas={["Tarefa Todo de Exemplo"]} />);

  const Element = getByText(/TODO/, {selector: "h1"});
  const TaskItem = getByText("Tarefa Todo de Exemplo", {selector: "ul > li"});

  expect(Element).toBeInTheDocument();
  expect(TaskItem).toBeInTheDocument();
});

test('Caixa de edição deve exibir uma nova tarefa', () => { 
  const MockComponent = () => {
    const [mockState, setMockState] = useState(["Tarefa Todo de Exemplo"]);
    return <>
      <CaixaEdicaoTexto enviar={(text) => {
        setMockState(p => [...p, text]);
      }} />
      <ListaTarefas titulo="TODO" tarefas={mockState} />
    </>;
  }
  const { getByText, getByPlaceholderText } = render(<MockComponent />);

  const inputElement = () => getByPlaceholderText("Adicione o texto da tarefa...");
  const ButtonElement = getByText("Criar", {selector: "button"});
  
  fireEvent.change(inputElement(), { target: { value: "Tarefa de Teste" } });
  fireEvent.click(ButtonElement);
  
  expect(inputElement().value).toBe("");
  const TaskItem = getByText("Tarefa de Teste", {selector: "ul > li"});
  expect(TaskItem).toBeInTheDocument();
});
