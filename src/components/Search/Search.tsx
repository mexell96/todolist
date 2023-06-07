import { FC } from "react";
import { Input } from "antd";

import { useStores } from "../../rootStoreContext";

const { Search } = Input;

const SearchComp: FC = () => {
  const {
    todos: { searchTodos, clearSearchText },
  } = useStores();

  return (
    <div
      style={{
        marginBottom: "20px",
      }}>
      <Search
        placeholder="Search text"
        allowClear
        onSearch={(text) => searchTodos(text)}
        onChange={(e) => clearSearchText(e.target.value)}
        enterButton
      />
    </div>
  );
};

export default SearchComp;
