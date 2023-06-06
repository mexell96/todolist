import { FC } from "react";
import { Checkbox, List, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";

import Input from "../../components/Input";
import Status from "../../components/Status";
import Search from "../../components/Search";

import { useStores } from "../../rootStoreContext";

const { Text } = Typography;

const Todos: FC = observer(() => {
  const {
    todos: { deleteTodo, updateTodos, total, inProgress, ready, list },
  } = useStores();

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <>
      <Status total={total} inProgress={inProgress} ready={ready} />
      <Search />
      <Input />
      <List
        bordered
        dataSource={list}
        renderItem={(todo) => (
          <List.Item>
            <Checkbox
              onChange={() => updateTodos(todo.id)}
              checked={todo.isChecked}
            />
            <Text
              delete={todo.isChecked}
              style={{
                margin: "0 auto 0 20px",
                borderBottom: `2px solid ${
                  todo.isChecked ? "#52c41a" : "#faad14"
                }`,
              }}>
              {todo.text}
            </Text>
            <DeleteOutlined onClick={() => handleDelete(todo.id)} />
          </List.Item>
        )}
      />
    </>
  );
});

export default Todos;
