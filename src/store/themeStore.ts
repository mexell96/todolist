import { makeAutoObservable } from "mobx";

class ThemeStore {
  isDark = false;

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (isDark: boolean) => {
    this.isDark = isDark;
  };
}

export default new ThemeStore();
