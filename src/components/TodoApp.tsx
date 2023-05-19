import { useState } from "react";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import "./scss/TodoApp.scss";
import styled from "styled-components";

const Title = styled.h1`
  color: #f00a69;
  border: 1px solid white;
  margin: 0;
  margin-bottom: 15px;
`;

export const TodoApp = () => {
  const [state, setState] = useState<Todo[]>([
    new Todo("Bada", false, new Date()),
    new Todo("Träna", false, new Date()),
    new Todo("Äta", false, new Date()),
    new Todo("Städa", false, new Date()),
  ]);

  const addTodo = (newTodo: Todo) => {
    if (newTodo.text.length > 0) {
      setState([...state, newTodo]);
    }
  };

  const doneTodo = (todo: Todo) => {
    const updatedTodos = state.map((t) => {
      if (t === todo) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    setState(updatedTodos);
  };

  const removeTodo = (todo: Todo) => {
    const updatedTodoList = state.filter((t) => t !== todo);
    setState(updatedTodoList);
  };

  return (
    <>
      <Title>Todo List</Title>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList
        todo={state}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
      ></TodoList>
    </>
  );
};
