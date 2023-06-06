import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todos from "./pages/Todos";
import Archive from "./pages/Archive";

import Navigation from "./components/Navigation";

import { RootStoreContext } from "./rootStoreContext";
import RootStore from "./store/rootStore";

const App = () => (
  <RootStoreContext.Provider value={new RootStore()}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  </RootStoreContext.Provider>
);

export default App;
