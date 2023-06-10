import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuProps } from "antd";
import { ClearOutlined, UnorderedListOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/">
        <UnorderedListOutlined />
        <span>Todos</span>
      </Link>
    ),
    key: "",
  },
  {
    label: (
      <Link to="/archive">
        <ClearOutlined />
        <span>Archive</span>
      </Link>
    ),
    key: "archive",
  },
];
const Navigation: FC = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(pathname.split("/")[1]);

  return (
    <Menu
      onClick={(e) => setCurrent(e.key)}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
      }}
    />
  );
};

export default Navigation;
