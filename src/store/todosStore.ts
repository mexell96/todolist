import { makeAutoObservable } from "mobx";

import { EStatus, ITodo } from "../pages/Todos/types";

class CounterStore {
  todos: ITodo[] = [];
  archiveTodos: ITodo[] = [];
  filteredStatusTodos: ITodo[] = [];
  filterStatus: EStatus = EStatus.Total;
  searchText: string = "";
  searchTextTodos: ITodo[] = [];
  todoText: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo: ITodo) => {
    this.todos.push(todo);
    this.todoText = "";
  };

  updateTodoText = (text: string) => {
    this.todoText = text;
  };

  updateTodos = (id: string) => {
    this.todos = this.todos?.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isChecked: !todo.isChecked,
            status: todo.isChecked ? EStatus.InProgress : EStatus.Ready,
          }
        : todo
    );
    this.setFilteredStatus(this.filterStatus);
  };

  deleteTodo = (id: string) => {
    const deletedTodo = this.todos?.filter((todo) => todo?.id === id);
    this.archiveTodos.push(deletedTodo?.[0]);
    this.todos = this.todos?.filter((todo) => todo?.id !== id);
    this.searchTextTodos = this.searchTextTodos?.filter(
      (todo) => todo?.id !== id
    );

    this.setFilteredStatus(this.filterStatus);
  };

  setFilteredStatus = (status: EStatus) => {
    this.filterStatus = status;
    this.filteredStatusTodos = this.todos?.reduce(
      (acc: ITodo[], todo) => (todo.status === status ? acc.concat(todo) : acc),
      []
    );
  };

  searchTodos = (text: string) => {
    this.searchText = text;
    this.searchTextTodos = this.todos?.reduce(
      (arr: ITodo[], todo) =>
        todo.text.indexOf(text) !== -1 ? arr.concat(todo) : arr,
      []
    );
  };

  clearSearchText = (text: string) => {
    if (text.length === 0) {
      this.searchText = "";
      this.searchTextTodos = [];
    }
  };

  updatePositionTodos = (todos: ITodo[]) => {
    this.todos = todos;
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

  get list() {
    if (this.filterStatus !== EStatus.Total && this.searchText) {
      return this.filteredStatusTodos?.reduce(
        (arr: ITodo[], todo) =>
          todo.text.indexOf(this.searchText) !== -1 ? arr.concat(todo) : arr,
        []
      );
    } else if (this.filterStatus !== EStatus.Total) {
      return this.filteredStatusTodos;
    } else if (this.searchText) {
      return this.searchTextTodos;
    } else {
      return this.todos;
    }
  }
}

export default new CounterStore();
