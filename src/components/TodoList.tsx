import { Todo } from "../models/Todo";
import styled from "styled-components";
import "./scss/TodoList.scss";

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

export interface ITodoProps {
  todo: Todo[];
  doneTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export const TodoList = ({ todo, doneTodo, removeTodo }: ITodoProps) => {
  const handleDoneClick = (todo: Todo) => {
    doneTodo(todo);
  };

  const handleRemoveClick = (todo: Todo) => {
    console.log(todo);
    removeTodo(todo);
  };

  return (
    <>
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
