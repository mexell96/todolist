import { FC } from "react";
import { Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { observer } from "mobx-react-lite";

import { EStatus } from "../../pages/Todos/types";
import { useStores } from "../../rootStoreContext";

const { Search } = Input;

const InputComp: FC = observer(() => {
  const {
    todos: { addTodo, todoText, updateTodoText },
  } = useStores();

  const handleAddTodo = (todoText: string) => {
    addTodo({
      id: uuidv4(),
      text: todoText,
      status: EStatus.InProgress,
      isChecked: false,
    });
  };

  return (
    <div
      style={{
        marginBottom: "20px",
      }}>
      <Search
        placeholder="Type your todo"
        allowClear
        onSearch={handleAddTodo}
        onChange={(e) => updateTodoText(e.target.value)}
        enterButton="Add"
        value={todoText}
      />
    </div>
  );
});

export default InputComp;
