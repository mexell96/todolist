import { FC, useState } from "react";
import { Checkbox, List } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

import { EStatus, ITodo } from "./types";

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "1",
      text: "Racing car sprays burning fuel into crowd.",
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

  const handleChange = (e: CheckboxChangeEvent, id: string) => {
    const updatedTodos = todos.map((todo) =>
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

  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item>
          <Checkbox
            onChange={(e) => handleChange(e, todo.id)}
            checked={todo.isChecked}
          />
          <p>{todo.text}</p>
        </List.Item>
      )}
    />
  );
};

export default Todos;
