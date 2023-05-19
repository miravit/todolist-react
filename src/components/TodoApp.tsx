import { useReducer, useState } from "react";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import "./scss/TodoApp.scss";
import styled from "styled-components";
import { TodosReducer } from "../reducers/todoReducer";

const Title = styled.h1`
  color: #f00a69;
  border: 1px solid white;
  margin: 0;
  margin-bottom: 15px;
`;

export const TodoApp = () => {
  const [state, dispatch] = useReducer(TodosReducer, []);

  const addTodo = (newTodo: string) => {
    if (newTodo.length > 0) {
      dispatch({ type: "added", payload: newTodo });
    }
  };

  const doneTodo = (todo: Todo) => {
    const IDToString = todo.id.toString();
    dispatch({ type: "toggled", payload: IDToString });
  };

  const removeTodo = (todo: Todo) => {
    const IDToString = todo.id.toString();
    dispatch({ type: "removed", payload: IDToString });
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
