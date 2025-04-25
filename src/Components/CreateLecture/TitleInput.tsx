import { Input } from "antd";
import { FC } from "react";
import { Props } from '../../types'

const TitleInput: FC<Props> = ({ value, onChange }) => (
  <Input
    placeholder="Добавить название"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ fontSize: "18px", border: "none", borderBottom: "2px solid #FFA66B" , borderRadius:0}}
  />
);

export default TitleInput;