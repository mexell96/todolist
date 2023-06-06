import { FC } from "react";
import { Button, Form, Input, Space } from "antd";
import { v4 as uuidv4 } from "uuid";

import { EStatus } from "../../pages/Todos/types";
import { IInputCompProps } from "./types";

const InputComp: FC<IInputCompProps> = ({ todos, setTodos }) => {
  const [form] = Form.useForm();

  const addTodo = ({ todoText }: { todoText: string }) => {
    const todo = {
      id: uuidv4(),
      text: todoText,
      status: EStatus.InProgress,
      isChecked: false,
    };
    setTodos([...todos, todo]);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={addTodo}>
      <Form.Item name="todoText">
        <Input placeholder="input todo" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default InputComp;
