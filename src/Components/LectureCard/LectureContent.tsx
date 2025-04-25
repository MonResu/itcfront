import { Typography, Divider } from "antd";
import { ContentItem } from "../../types";

// это тоже пока накинула просто чтоб видеть как выглядит дизайн, с превью файлов я разберусь потом

const { Paragraph } = Typography;


type Props = {
  content: ContentItem[];
};

const LectureContent = ({ content }: Props) => {
  const renderContent = (item: ContentItem, index: number) => {
    switch (item.type) {
      case "paragraph":
        return <Paragraph key={index}>{item.value}</Paragraph>;
      case "list":
        return (
          <ul key={index} style={{ paddingLeft: 20 }}>
            {item.value.map((li, idx) => (
              <li key={idx}>{li}</li>
            ))}
          </ul>
        );
      case "quote":
        return (
          <blockquote key={index} style={{ fontStyle: "italic" }}>
            {item.value}
          </blockquote>
        );
      case "image":
        return (
          <div key={index} style={{ textAlign: "center", margin: "16px 0" }}>
            <img src={item.src} alt="content" style={{ maxWidth: "100%" }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ background: "white", padding: "16px", borderRadius: "8px" }}>
      {content.map((item, index) => (
        <div key={index}>
          {renderContent(item, index)}
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default LectureContent;
