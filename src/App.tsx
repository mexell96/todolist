import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todos from "./pages/Todos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
