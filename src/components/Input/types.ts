import { Dispatch, SetStateAction } from "react";

import { ITodo } from "../../pages/Todos/types";

export interface IInputCompProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}
