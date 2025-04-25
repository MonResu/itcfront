import { Typography } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { FC } from "react";
import { LectureMetaProps } from "../../types";

const { Title, Text } = Typography;



const LectureMeta: FC<LectureMetaProps> = ({ title, date, expanded, onToggle }) => (
  <div onClick={onToggle} style={{ cursor: "pointer" }}>
    <Text style={{ fontSize: "12px" }}>
      {date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit" })}
    </Text>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Title level={4} style={{ margin: 0 }}>{title}</Title>
      {expanded ? <UpOutlined /> : <DownOutlined />}
    </div>
  </div>
);

export default LectureMeta;