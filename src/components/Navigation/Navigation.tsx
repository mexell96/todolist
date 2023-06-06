import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuProps } from "antd";
import { ClearOutlined, UnorderedListOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Todos</Link>,
    key: "",
    icon: <UnorderedListOutlined />,
  },
  {
    label: <Link to="/archive">Archive</Link>,
    key: "archive",
    icon: <ClearOutlined />,
  },
];

const Todos: FC = () => {
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
        background: "white",
        zIndex: "1000",
      }}
    />
  );
};

export default Todos;
