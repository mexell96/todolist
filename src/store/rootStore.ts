import TodosStore from "./todosStore";
import ThemeStore from "./themeStore";

class RootStore {
  todos = TodosStore;
  theme = ThemeStore;
}

export default RootStore;
