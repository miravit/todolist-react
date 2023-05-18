import { useState } from "react";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import "./scss/TodoApp.scss";

export const TodoApp = () => {
  const [state, setState] = useState<Todo[]>([
    new Todo("Bada", false, new Date()),
    new Todo("Träna", false, new Date()),
    new Todo("Äta", false, new Date()),
    new Todo("Städa", false, new Date()),
  ]);

  const addTodo = (newTodo: Todo) => {
    setState([...state, newTodo]);
  };

  const checkTodo = (todo: Todo) => {
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
      <TodoList
        todo={state}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
      ></TodoList>
      <AddTodo addTodo={addTodo}></AddTodo>
    </>
  );
};
