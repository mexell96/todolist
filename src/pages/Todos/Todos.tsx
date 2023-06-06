import { FC, useState } from "react";
import { Checkbox, List, Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { DeleteOutlined } from "@ant-design/icons";

import { EStatus, ITodo } from "./types";

import InputComp from "../../components/Input";
import Status from "../../components/Status";

const { Text } = Typography;

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "1",
      text: "Racing car sprays burning fuel into crowd. Racing car sprays burning fuel into crowd. Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.",
      status: EStatus.InProgress,
      isChecked: false,
    },
    {
      id: "2",
      text: "Japanese princess to wed commoner.",
      status: EStatus.Ready,
      isChecked: true,
    },
    {
      id: "3",
      text: "Australian walks 100km after outback crash.",
      status: EStatus.InProgress,
      isChecked: false,
    },
  ]);
  const [archive, setArchive] = useState<ITodo[]>([]);

  const handleChange = (e: CheckboxChangeEvent, id: string) => {
    const updatedTodos = todos?.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isChecked: !todo.isChecked,
            status: todo.isChecked ? EStatus.Ready : EStatus.InProgress,
          }
        : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos?.reduce(
      (acc: ITodo[], todo) =>
        todo.id === id ? acc.concat({ ...todo, status: EStatus.Archive }) : acc,
      []
    );
    setArchive(updatedTodos);
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  const total = todos?.length;
  const inProgress = todos?.reduce(
    (acc: number, todo) => (todo.isChecked ? acc : acc + 1),
    0
  );
  const ready = total - inProgress;

  return (
    <>
      <Status total={total} inProgress={inProgress} ready={ready} />
      <InputComp todos={todos} setTodos={setTodos} />
      <List
        bordered
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item>
            <Checkbox
              onChange={(e) => handleChange(e, todo.id)}
              checked={todo.isChecked}
            />
            <Text delete={todo.isChecked} style={{ padding: "0 20px" }}>
              {todo.text}
            </Text>
            <DeleteOutlined onClick={() => handleDelete(todo.id)} />
          </List.Item>
        )}
      />
    </>
  );
};

export default Todos;
