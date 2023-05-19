import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { TodoDispatchContext } from "../contexts/todoContext";

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

export const AddTodo = () => {
  const dispatch = useContext(TodoDispatchContext);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewTodo(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(newTodo);
    if (newTodo.length > 0) {
      dispatch({ type: "added", payload: newTodo });
    } //här kan jag göra else valideringsmeddelande

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
