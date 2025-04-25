import { Calendar } from "antd";
import { Select } from "antd";
import { Dayjs } from "dayjs";
import { useState } from "react";

const monthNames = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
];

const CalendarLecture = ({ date, onChange }: {
  date: Dayjs;
  onChange: (date: Dayjs) => void;
}) => {
  const [current, setCurrent] = useState<Dayjs>(date);

  const handleMonthSelect = (month: number) => {
    const updated = current.month(month);
    setCurrent(updated);
    onChange(updated);
  };

  const handleYearSelect = (year: number) => {
    const updated = current.year(year);
    setCurrent(updated);
    onChange(updated);
  };

  return (
    <Calendar
      fullscreen={false}
      value={current}
      onSelect={(value) => {
        setCurrent(value);
        onChange(value);
      }}
      headerRender={() => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 0",
            gap: 16,
          }}
        >

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {/* Месяц */}
            <Select
              value={current.month()}
              onChange={handleMonthSelect}
              bordered={false}
              style={{
                fontSize: 18,
                fontWeight: 600,
                textAlign: "center",
                minWidth: 100,
              }}
              dropdownStyle={{ fontSize: 16 }}
              options={monthNames.map((name, index) => ({
                label: name,
                value: index,
              }))}
            />

            {/* Год */}
            <Select
              value={current.year()}
              onChange={handleYearSelect}
              bordered={false}
              style={{
                fontSize: 18,
                fontWeight: 600,
                textAlign: "center",
              }}
              dropdownStyle={{ fontSize: 16 }}
              options={Array.from({ length: 20 }, (_, i) => current.year() - 10 + i).map((year) => ({
                label: year,
                value: year,
              }))}
            />
          </div>

          <div></div>
        </div>
      )}
    />
  );
};

export default CalendarLecture;
