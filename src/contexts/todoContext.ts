import { Dispatch, createContext } from "react";
import { Todo } from "../models/Todo";
import { IAction } from "../reducers/todoReducer";

export const TodosContext = createContext<Todo[]>([]);
export const TodoDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
