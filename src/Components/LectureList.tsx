import LectureCard from "./LectureCard/LectureCard";
import { LectureListProps } from "../types";

const LectureList = ({ lectures, isChairman, onEdit }: LectureListProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        paddingTop: "20px",
        backgroundColor: "#fff",
      }}
    >
      <div>
        {lectures.map((lecture, index) => (
          <LectureCard
            key={index}
            lecture={lecture}
            isChairman={isChairman}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default LectureList;
