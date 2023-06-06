import { createContext, useContext } from "react";

import RootStore from "./store/rootStore";

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error("Error regarding store");
  }

  return context;
};
