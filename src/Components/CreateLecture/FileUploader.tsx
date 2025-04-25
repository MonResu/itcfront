import { Upload } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import { FC } from "react";

interface Props {
  file: File | null;
  onChange: (file: File | null) => void;
}

const FileUploader: FC<Props> = ({ file, onChange }) => {
  return (
    <Upload
      beforeUpload={(file) => {
        onChange(file);
        return false;
      }}
      showUploadList={false}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: '10px',
          paddingBottom: 4,
          gap: 8,
        }}
      >
        <PaperClipOutlined style={{ fontSize: 16 }} />
        <span style={{ userSelect: "none", borderBottom: "2px solid #FFA66B" }} >
          {file ? file.name : "Прикрепить файл"}
        </span>
      </div>
    </Upload>
  );
};

export default FileUploader;
