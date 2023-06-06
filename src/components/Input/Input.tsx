import { Dispatch, FC, SetStateAction } from "react";
import { Button, Form, Input, Space } from "antd";
import { v4 as uuidv4 } from "uuid";

import { EStatus, ITodo } from "../../pages/Todos/types";

interface IInputCompProps {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

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
