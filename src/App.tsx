import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Col, ConfigProvider, Row, theme } from "antd";
import { observer } from "mobx-react-lite";

import Todos from "./pages/Todos";
import Archive from "./pages/Archive";

import Navigation from "./components/Navigation";

import { useStores } from "./rootStoreContext";

const { defaultAlgorithm, darkAlgorithm } = theme;

const App = observer(() => {
  const {
    theme: { isDark, setTheme },
  } = useStores();

  const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    setTheme(themeQuery.matches);

    const handler = ({ matches: isDark }: MediaQueryListEvent) =>
      setTheme(isDark);

    themeQuery.addEventListener("change", handler);

    return () => themeQuery.removeEventListener("change", handler);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
      }}>
      <div
        style={{
          background: isDark ? "black" : "white",
          height: "100vh",
          paddingTop: "70px",
        }}>
        <Navigation />
        <div style={{ margin: "0px 20px" }}>
          <Row gutter={{ xs: 2, sm: 16, md: 24, lg: 32, xl: 40 }}>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 20, offset: 2 }}
              xl={{ span: 16, offset: 4 }}>
              <Routes>
                <Route path="/" element={<Todos />} />
                <Route path="/archive" element={<Archive />} />
              </Routes>
            </Col>
          </Row>
        </div>
      </div>
    </ConfigProvider>
  );
});

export default App;
