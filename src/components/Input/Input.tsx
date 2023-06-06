import { FC } from "react";
import { Button, Form, Input, Space } from "antd";
import { v4 as uuidv4 } from "uuid";

import { EStatus } from "../../pages/Todos/types";
import { useStores } from "../../rootStoreContext";

const InputComp: FC = () => {
  const {
    todos: { addTodo },
  } = useStores();

  const [form] = Form.useForm();

  const handlerAddTodo = ({ todoText }: { todoText: string }) => {
    addTodo({
      id: uuidv4(),
      text: todoText,
      status: EStatus.InProgress,
      isChecked: false,
    });
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handlerAddTodo}>
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
