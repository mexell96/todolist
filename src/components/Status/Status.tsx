import { FC } from "react";
import { Badge, Typography } from "antd";

import { IStatusProps } from "./types";

const { Text } = Typography;

const Status: FC<IStatusProps> = ({ total, inProgress, ready }) => (
  <div style={{ margin: "20px 16px" }}>
    <Text>Total: </Text>
    <Badge count={total} showZero color="#808080" />
    <br />
    <Text>In progress: </Text>
    <Badge count={inProgress} showZero color="#faad14" />
    <br />
    <Text>Ready: </Text>
    <Badge count={ready} showZero color="#52c41a" />
  </div>
);

export default Status;
