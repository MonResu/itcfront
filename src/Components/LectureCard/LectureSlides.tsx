import { Card, Carousel, Typography } from "antd";
import { ShareAltOutlined, ExpandOutlined } from "@ant-design/icons";
import { FC } from "react";
import { LectureSlidesProps } from "../../types";

const { Title } = Typography;

const LectureSlides: FC<LectureSlidesProps> = ({ slides }) => (
  <Card
    styles={{ body: { padding: "16px" } }}
    style={{ backgroundColor: "#B89EFF", borderRadius: "16px", textAlign: "center", marginBottom: "16px" }}
  >
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ShareAltOutlined />
      <ExpandOutlined />
    </div>
    <Carousel arrows style={{ minHeight: "100px" }}>
      {slides.map((slide, idx) => (
        <div key={idx} style={{ textAlign: "center" }}>
          <Title level={4}>{slide}</Title>
        </div>
      ))}
    </Carousel>
  </Card>
);

export default LectureSlides;