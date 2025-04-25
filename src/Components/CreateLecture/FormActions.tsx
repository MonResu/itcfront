import { Button } from "antd";
import { FC } from "react";

type Props = {
  onClear: () => void;
  onSubmit: () => void;
  onCancel?: () => void;
};

const FormActions: FC<Props> = ({ onClear, onSubmit }) => (
  <div style={{ display: "flex", gap: 16, justifyContent: "right" }}>
    <Button
      onClick={onClear}
      type="default"
      style={{ border: "2px solid #FFA66B" }}
    >
      Очистить
    </Button>
    <Button
      onClick={onSubmit}
      type="primary"
      style={{ backgroundColor: "#FFA66B", border: "none" }}
    >
      Опубликовать
    </Button>
  </div>
);

export default FormActions;
