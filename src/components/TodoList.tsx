import { Todo } from "../models/Todo";
import styled from "styled-components";
import "./scss/TodoList.scss";

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  border: 2px solid white;

  .todoWrapper {
    display: flex;
  }
  ul {
    list-style-type: none;
    padding: 0;
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
  }
`;

const TodoDone = styled.li`
  text-decoration: line-through;
`;

const TodoNotDone = styled.li`
  text-decoration: none;
`;

export interface ITodoProps {
  todo: Todo[];
  checkTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export const TodoList = ({ todo, checkTodo, removeTodo }: ITodoProps) => {
  const handleDoneClick = (todo: Todo) => {
    checkTodo(todo);
  };

  const handleRemoveClick = (todo: Todo) => {
    console.log(todo);
    removeTodo(todo);
  };

  return (
    <>
      <h2>Todo List</h2>
      <TodoContainer>
        <ul className="todoList">
          {todo.map((todo, index) => (
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
      </TodoContainer>
    </>
  );
};
