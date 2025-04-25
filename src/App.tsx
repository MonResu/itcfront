import { useState } from "react";
import CreateLecture from "./Components/CreateLecture/CreateLecture";
import LectureList from "./Components/LectureList";
import { Lecture } from "./types";
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

const lectures: Lecture[] = [
  {
    date: new Date("2025-04-02"),
    title: "Кураторское искусство",
    presentation: {
      link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },

    content: [
      { type: "paragraph", value: "Введение в кураторское искусство." },
      {
        type: "list",
        value: ["Обязанности куратора", "Этика", "Работа с перваками"],
      },
      {
        type: "quote",
        value: "Кураторство — это искусство представлять идеи.",
      },
      {
        type: "image",
        src: "https://example.com/image1.jpg",
      },
    ],
  },
  {
    date: new Date("2025-04-02"),
    title: "Кураторский банан",
    presentation: {
      link: "https://example.com/presentation1",
    },
    content: [
      { type: "paragraph", value: "Проект с бананами на выставке." },
      {
        type: "image",
        src: "https://example.com/banana.jpg",
      },
      { type: "paragraph", value: "Проект с бананами на выставке." },
    ],
  },
];

const App = () => {
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  return (
    <>
      {!selectedLecture ? (
        <LectureList
          lectures={lectures}
          isChairman={true}
          onEdit={(lecture) => setSelectedLecture(lecture)}
        />
      ) : (
        <CreateLecture
          initialData={selectedLecture}
          onCancel={() => setSelectedLecture(null)}
        />
      )}
    </>
  );
};

export default App;
