import { useState } from "react";
import { Card } from "antd";
import { LectureCardProps } from "../../types";

import LectureMeta from "./LectureMeta";
import EditButton from "./EditButton";
import LecturePdfViewer from "./LecturePdfViewer";
import LectureContent from "./LectureContent";

const LectureCard = ({ lecture, isChairman, onEdit }: LectureCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      style={{
        backgroundColor: "#FFD2AD",
        borderRadius: "16px",
        width: "40vw",
        minWidth: "300px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
      styles={{ body: { padding: 0 } }}
      variant="outlined"
    >
      <LectureMeta
        title={lecture.title}
        date={lecture.date}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      {expanded && (
        <div style={{ marginTop: 16 }}>
          {lecture.presentation?.link?.endsWith(".pdf") && (
            <LecturePdfViewer url={lecture.presentation.link} />
          )}
          {lecture.content?.length > 0 && (
            <LectureContent content={lecture.content} /> 
          )}

          {isChairman && <EditButton onClick={() => onEdit(lecture)} />}
        </div>
      )}
    </Card>
  );
};

export default LectureCard;
