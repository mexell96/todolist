import { FC, useState } from "react";
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
    todos: {
      deleteTodo,
      updateTodos,
      total,
      inProgress,
      ready,
      list,
      updatePositionTodos,
    },
  } = useStores();

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  const [newIndex, setIndex] = useState(0);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const index = +e.dataTransfer.getData("text");
    const copyListItems = [...list];
    const currentTodo = copyListItems[index];
    copyListItems.splice(index, 1);
    copyListItems.splice(newIndex, 0, currentTodo);
    updatePositionTodos(copyListItems);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <>
      <Status total={total} inProgress={inProgress} ready={ready} />
      <Search />
      <Input />
      <div onDrop={handleDrop} onDragOver={handleDragOver}>
        <List
          locale={{ emptyText: "No todos" }}
          bordered
          dataSource={list}
          renderItem={(todo, index) => {
            const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
              e.dataTransfer.setData("text", `${index}`);
            };
            return (
              <List.Item
                onDragStart={handleDragStart}
                onDragOver={() => setIndex(index)}
                key={index}
                draggable>
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
            );
          }}
        />
      </div>
    </>
  );
});

export default Todos;
