import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todos from "./pages/Todos";
import Archive from "./pages/Archive";

import Navigation from "./components/Navigation";

import { RootStoreContext } from "./rootStoreContext";
import RootStore from "./store/rootStore";

const App = () => (
  <RootStoreContext.Provider value={new RootStore()}>
    <BrowserRouter basename="/todolist">
      <Navigation />
      <div style={{ paddingTop: "70px", margin: "0px 16px 20px" }}>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </BrowserRouter>
  </RootStoreContext.Provider>
);

export default App;
