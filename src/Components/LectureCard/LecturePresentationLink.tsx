import { Typography } from "antd";
import { FC } from "react";
import { LecturePresentationLinkProps } from "../../types";

const { Title, Paragraph, Link } = Typography;



const LecturePresentationLink: FC<LecturePresentationLinkProps> = ({ link }) => (
  <div style={{ textAlign: "center", marginBottom: 16 }}>
    <Title level={5}>Ссылка на презентацию:</Title>
    <Paragraph copyable>
      <Link href={link} target="_blank">{link}</Link>
    </Paragraph>
  </div>
);

export default LecturePresentationLink;