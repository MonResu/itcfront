import { FC } from "react";
import { Calendar, TimePicker, Typography, Select, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";
import ruRU from "antd/es/date-picker/locale/ru_RU";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Text } = Typography;
const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

dayjs.locale("ru");

interface Props {
  date: Date;
  timeRange: [string, string];
  onChange: (date: Date, timeRange: [string, string]) => void;
}

const DateTimePicker: FC<Props> = ({ date, timeRange, onChange }) => {
  const handleDateChange = (value: Dayjs) => {
    onChange(value.toDate(), timeRange);
  };

  const handleTimeChange = (
    times: [Dayjs | null, Dayjs | null] | null,
    _timeStrings: [string, string]
  ) => {
    if (times && times[0] && times[1]) {
      const [start, end] = times.map((t) => t!.format("HH:mm")) as [
        string,
        string
      ];
      onChange(date, [start, end]);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Text strong style={{ fontSize: 16 }}>
          {dayjs(date).format("dddd, D MMMM")}
        </Text>
        <Text>{`${timeRange[0]} — ${timeRange[1]}`}</Text>
      </div>

      <div
        style={{
          border: "2px solid #FFA66B",
          borderRadius: "12px",
          padding: 8,
        }}
      >
        <Calendar
          fullscreen={false}
          value={dayjs(date)}
          onSelect={handleDateChange}
          locale={ruRU}
          headerRender={({ value, onChange }) => {
            const current = value.clone();

            const handlePrevMonth = () =>
              onChange(current.subtract(1, "month"));
            const handleNextMonth = () => onChange(current.add(1, "month"));

            const handleMonthSelect = (month: number) => {
              onChange(current.month(month));
            };

            const handleYearSelect = (year: number) => {
              onChange(current.year(year));
            };

            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 16px",
                }}
              >
                <Space size={4}>
                  <Select
                    value={current.month()}
                    onChange={handleMonthSelect}
                    bordered={false}
                    suffixIcon={null}
                    style={{ minWidth: 100, fontWeight: 600, fontSize: 16 }}
                    options={monthNames.map((name, index) => ({
                      label: name,
                      value: index,
                    }))}
                  />
                  <Select
                    value={current.year()}
                    onChange={handleYearSelect}
                    bordered={false}
                    suffixIcon={null}
                    style={{ fontWeight: 600, fontSize: 16 }}
                    options={Array.from(
                      { length: 10 },
                      (_, i) => current.year() - 5 + i
                    ).map((year) => ({
                      label: year,
                      value: year,
                    }))}
                  />
                </Space>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    gap: "20px",
                  }}
                >
                  <LeftOutlined
                    onClick={handlePrevMonth}
                    style={{ cursor: "pointer" }}
                  />
                  <RightOutlined
                    onClick={handleNextMonth}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            );
          }}
        />
      </div>

      <TimePicker.RangePicker
        format="HH:mm"
        value={[dayjs(timeRange[0], "HH:mm"), dayjs(timeRange[1], "HH:mm")]}
        onChange={handleTimeChange}
      />
    </div>
  );
};

export default DateTimePicker;
