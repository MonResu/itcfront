import { Input } from "antd";
import { FC } from "react";
import { EditOutlined } from "@ant-design/icons";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const DescriptionInput: FC<Props> = ({ value, onChange }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,

      paddingBottom: 4,
    }}
  >
    <EditOutlined style={{ fontSize: 16, position: "relative", top: 2 }} />
    <Input.TextArea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Добавить описание"
      autoSize
      bordered={false}
      style={{
        resize: "none",
        padding: 0,
        margin: 0,
        flex: 1,
        borderBottom: "2px solid #FFA66B",
        borderRadius: 0,
      }}
    />
  </div>
);

export default DescriptionInput;
