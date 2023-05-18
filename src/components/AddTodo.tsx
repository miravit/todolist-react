import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../models/Todo";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    width 100px;
  }
  input {
    width: 190px;
  }
`;

interface IAddTodoProps {
  addTodo: (newTodo: Todo) => void;
}

export const AddTodo = ({ addTodo }: IAddTodoProps) => {
  const [newTodo, setNewTodo] = useState<Todo[]>([
    new Todo("", false, new Date()),
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange");
    const value = e.target.value;
    setNewTodo([new Todo(value, false, new Date())]);
  };

  const handleSubmit = (e: FormEvent) => {
    console.log("handle submibt");
    e.preventDefault();
    addTodo(newTodo[0]);
    setNewTodo([new Todo("", false, new Date())]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Skriv en todo..."
          value={newTodo[0].text}
          //behövs om det är flera inputs //name="text"
          onChange={handleChange}
        ></input>
        <button>Lägg till</button>
      </Form>
    </>
  );
};
