import { Todo } from "../models/Todo";

interface IAction {
  type: string;
  payload: string; //kan vara any eller T. är det string måste vi göra number.ToString()
}

export const TodosReducer = (state: Todo[], action: IAction) => {
  switch (action.type) {
    case "added":
      return [...state, new Todo(action.payload, false, new Date().getTime())];

    case "toggled":
      return state.map((todo) => {
        if (todo.id.toString() === action.payload) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });

    case "removed":
      return state.filter((t) => t.id.toString() !== action.payload);
  }
  return state;
};
