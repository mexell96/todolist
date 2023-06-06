import { FC } from "react";
import { Badge, Radio, RadioChangeEvent, Typography } from "antd";

import { IStatusProps } from "./types";
import { EStatus } from "../../pages/Todos/types";
import { useStores } from "../../rootStoreContext";

const { Text } = Typography;

const Status: FC<IStatusProps> = ({ total, inProgress, ready }) => {
  const {
    todos: { filterStatus, setFilteredStatus },
  } = useStores();

  return (
    <div style={{ margin: "20px 16px" }}>
      <Radio.Group
        onChange={(e: RadioChangeEvent) => setFilteredStatus(e.target.value)}
        value={filterStatus}>
        <Radio value={EStatus.Total}>
          <Text>Total: </Text>
          <Badge count={total} showZero color="#808080" />
        </Radio>
        <br />
        <Radio value={EStatus.InProgress}>
          <Text>In progress: </Text>
          <Badge count={inProgress} showZero color="#faad14" />
        </Radio>
        <br />
        <Radio value={EStatus.Ready}>
          <Text>Ready: </Text>
          <Badge count={ready} showZero color="#52c41a" />
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default Status;
