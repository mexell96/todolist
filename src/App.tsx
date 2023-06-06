import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todos from "./pages/Todos";
import Archive from "./pages/Archive";

import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
