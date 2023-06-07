import { FC } from "react";
import { List, Typography } from "antd";
import { observer } from "mobx-react-lite";

import { useStores } from "../../rootStoreContext";

const { Text } = Typography;

const Archive: FC = observer(() => {
  const {
    todos: { archiveTodos },
  } = useStores();

  return (
    <List
      locale={{ emptyText: "No todos" }}
      bordered
      dataSource={archiveTodos}
      renderItem={(todo) => (
        <List.Item>
          <Text delete={todo.isChecked} style={{ margin: "0 auto 0 20px" }}>
            {todo.text}
          </Text>
        </List.Item>
      )}
    />
  );
});

export default Archive;
