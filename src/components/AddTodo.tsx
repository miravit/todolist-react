import { ChangeEvent, FormEvent, useState } from "react";
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
  addTodo: (newTodo: string) => void;
}

export const AddTodo = ({ addTodo }: IAddTodoProps) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewTodo(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Skriv en todo..."
          value={newTodo}
          //behövs om det är flera inputs //name="text"
          onChange={handleChange}
        ></input>
        <button>Lägg till</button>
      </Form>
    </>
  );
};
