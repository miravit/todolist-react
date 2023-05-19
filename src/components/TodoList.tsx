import { Todo } from "../models/Todo";
import styled from "styled-components";
import "./scss/TodoList.scss";
import { TodoDispatchContext, TodosContext } from "../contexts/todoContext";
import { useContext } from "react";

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  border: 1px solid white;
  margin-top: 15px;

  .todoWrapper {
    display: flex;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  ul:first-child {
    margin-top: 40px;
  }
  li {
    border: 1px solid white;
    width: 100px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  button {
    height: 15px;
    width: 70px;
    font-size: 12px;
    padding: 0;
    margin-right: 5px;
    margin-top: 4px;
  }
`;

const TodoDone = styled.li`
  text-decoration: line-through;
`;

const TodoNotDone = styled.li`
  text-decoration: none;
`;

export const TodoList = () => {
  const todos = useContext(TodosContext);
  const dispatch = useContext(TodoDispatchContext);

  const handleDoneClick = (todo: Todo) => {
    dispatch({
      type: "toggled",
      payload: todo.id.toString(),
    });
  };

  const handleRemoveClick = (todo: Todo) => {
    dispatch({
      type: "removed",
      payload: todo.id.toString(),
    });
  };

  const html = (
    <ul className="todoList">
      {todos.map((todo, index) => (
        <div key={index} className="todoWrapper">
          {todo.done ? (
            <TodoDone>{todo.text}</TodoDone>
          ) : (
            <TodoNotDone>{todo.text}</TodoNotDone>
          )}
          <button onClick={() => handleDoneClick(todo)}>Done</button>
          <button onClick={() => handleRemoveClick(todo)}>Remove</button>
        </div>
      ))}
    </ul>
  );

  return (
    <>
      <TodoContainer>{html}</TodoContainer>
    </>
  );
};
