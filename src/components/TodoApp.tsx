import { useReducer, useState } from "react";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import "./scss/TodoApp.scss";
import styled from "styled-components";
import { TodosReducer } from "../reducers/todoReducer";
import { TodoDispatchContext, TodosContext } from "../contexts/todoContext";

const Title = styled.h1`
  color: #f00a69;
  border: 1px solid white;
  margin: 0;
  margin-bottom: 15px;
`;

export const TodoApp = () => {
  const [state, dispatch] = useReducer(TodosReducer, []);

  return (
    <>
      <Title>Todo List</Title>
      <TodosContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </TodoDispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
};
