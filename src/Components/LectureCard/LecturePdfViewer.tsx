import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { Typography } from "antd";

// я два часа с этим мучалась и нихера не выходит так что ща пока так оставлю
pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";  


type Props = {
  url: string;
};

const LecturePdfPreview = ({ url }: Props) => {
  const [, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null); 


  const onError = (error: any) => {
    console.error("Ошибка загрузки PDF:", error); 
    setError("Не удалось загрузить файл PDF"); 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography.Title level={5}>Превью файла</Typography.Title>

      {error ? ( 
        <div>
          <Typography.Paragraph>{error}</Typography.Paragraph>
        </div>
      ) : (
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={onError} 
          loading="Загрузка..."
        >
          <Page pageNumber={1} width={400} />
        </Document>
      )}
    </div>
  );
};

export default LecturePdfPreview;
