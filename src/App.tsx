import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Row } from "antd";

import Todos from "./pages/Todos";
import Archive from "./pages/Archive";

import Navigation from "./components/Navigation";

import { RootStoreContext } from "./rootStoreContext";
import RootStore from "./store/rootStore";

const App = () => (
  <RootStoreContext.Provider value={new RootStore()}>
    <BrowserRouter basename="/todolist">
      <Navigation />
      <Row gutter={{ xs: 2, sm: 16, md: 24, lg: 32, xl: 40 }}>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 20, offset: 2 }}
          xl={{ span: 16, offset: 4 }}>
          <div style={{ paddingTop: "70px", margin: "0px 16px 20px" }}>
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/archive" element={<Archive />} />
            </Routes>
          </div>
        </Col>
      </Row>
    </BrowserRouter>
  </RootStoreContext.Provider>
);

export default App;
