import { useState } from "react";
import { Lecture } from "../../types";
import TitleInput from "./TitleInput";
import DateTimePicker from "./DateTimePicker";
import DescriptionInput from "./DescriptionInput";
import FileUploader from "./FileUploader";
import FormActions from "./FormActions";

type Props = {
  initialData?: Lecture;
  onCancel?: () => void;
};

export type ScheduleData = {
  title: string;
  date: Date;
  timeRange: [string, string];
  description: string;
  file: File | null;
};

const CreateLecture = ({ initialData, onCancel }: Props) => {
  const [formData, setFormData] = useState<ScheduleData>({
    title: initialData?.title || "",
    date: initialData?.date || new Date(),
    timeRange: ["12:00", "13:00"],
    description:
      initialData?.content
        ?.filter(
          (item): item is { type: "paragraph"; value: string } =>
            item.type === "paragraph"
        )
        .map((item) => item.value)
        .join("\n") || "",

    file: null,
  });

  const handleChange = <K extends keyof ScheduleData>(
    key: K,
    value: ScheduleData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("Отправляем данные:", formData);
    // Тут отправка на сервер
  };

  return (
    <div
      style={{
        background: "white",
        padding: 24,
        borderRadius: 16,
        width: "40vw",
        minWidth: 320,
        margin: "0 auto",
        marginTop: 40,
      }}
    >
      <TitleInput
        value={formData.title}
        onChange={(v) => handleChange("title", v)}
      />
      <div style={{ marginBottom: 16 }} />
      <DateTimePicker
        date={formData.date}
        timeRange={formData.timeRange}
        onChange={(date, range) => {
          handleChange("date", date);
          handleChange("timeRange", range);
        }}
      />
      <div style={{ marginBottom: 16 }} />
      <DescriptionInput
        value={formData.description}
        onChange={(v) => handleChange("description", v)}
      />
      <div style={{ marginBottom: 16 }} />
      <FileUploader
        file={formData.file}
        onChange={(file) => handleChange("file", file)}
      />
      <FormActions
        onClear={() => console.log("Очистить")}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};

export default CreateLecture;
