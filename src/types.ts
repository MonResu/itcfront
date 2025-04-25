export type ContentItem =
  | { type: "paragraph" | "quote"; value: string }
  | { type: "list"; value: string[] }
  | { type: "image"; src: string };

export interface PropsDate {
  date: Date;
  timeRange: [string, string];
  onChange: (date: Date, timeRange: [string, string]) => void;
}

export type Props = {
  value: string;
  onChange: (value: string) => void;
};

export type Presentation = {
  link: string;
};

export type Lecture = {
  date: Date;
  title: string;
  presentation?: Presentation;
  content: ContentItem[];
};

export interface LectureCardProps {
  lecture: Lecture;
  isChairman: boolean;
  onEdit: (lecture: Lecture) => void;
}

export interface LectureListProps {
  lectures: Lecture[];
  isChairman: boolean;
  onEdit: (lecture: Lecture) => void;
}

export type LectureMetaProps = {
  title: string;
  date: Date;
  expanded: boolean;
  onToggle: () => void;
};

export type LectureSlidesProps = {
  slides: string[];
};

export type LecturePresentationLinkProps = {
  link: string;
};

export type ScheduleData = {
  title: string;
  date: Date;
  timeRange: [string, string];
  description: string;
  file: File | null;
};
