import { makeAutoObservable } from "mobx";

import { EStatus, ITodo } from "../pages/Todos/types";

class CounterStore {
  todos: ITodo[] = [
    {
      id: "1",
      text: "Racing car sprays burning fuel into crowd. Racing car sprays burning fuel into crowd. Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.",
      status: EStatus.InProgress,
      isChecked: false,
    },
    {
      id: "2",
      text: "Japanese princess to wed commoner.",
      status: EStatus.Ready,
      isChecked: true,
    },
    {
      id: "3",
      text: "Australian walks 100km after outback crash.",
      status: EStatus.InProgress,
      isChecked: false,
    },
  ];

  archiveTodos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: ITodo) => {
    this.todos.push(todo);
  };

  updateTodos = (id: string) => {
    this.todos = this.todos?.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isChecked: !todo.isChecked,
            status: todo.isChecked ? EStatus.Ready : EStatus.InProgress,
          }
        : todo
    );
  };

  deleteTodo = (id: string) => {
    this.todos = this.todos?.filter((todo) => todo?.id !== id);
  };

  addToArchive = (id: string) => {
    this.archiveTodos = this.todos?.reduce(
      (acc: ITodo[], todo) =>
        todo.id === id ? acc.concat({ ...todo, status: EStatus.Archive }) : acc,
      []
    );
  };

  get total() {
    return this.todos?.length;
  }

  get inProgress() {
    return this.todos?.reduce(
      (acc: number, todo) => (todo.isChecked ? acc : acc + 1),
      0
    );
  }
  get ready() {
    return this.total - this.inProgress;
  }
}

export default new CounterStore();
