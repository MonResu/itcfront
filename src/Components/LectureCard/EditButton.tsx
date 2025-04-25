import { Button } from "antd";
import { FC } from "react";

type Props = {
  onClick: () => void;
};

const EditButton: FC<Props> = ({ onClick }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Button
      onClick={onClick}
      type="default"
      style={{
        marginTop: 16,
        backgroundColor: "#FFD4B6",
        border: "1px solid #B0886A",
      }}
    >
      Редактировать
    </Button>
  </div>
);

export default EditButton;
