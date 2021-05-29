import { TDate } from "types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

interface DateSelectorProps {
  date?: TDate;
  setEndDate: (date: Date | null) => {};
  setStartDate: (date: Date) => {};
}

export default function DateSelector({
  date = { end: null, start: new Date() },
  setEndDate,
  setStartDate,
}: DateSelectorProps) {
  if (!date) return null;
  return (
    <p className="col-span-3">
      <label className="flex justify-between pr-5 flex-wrap">
        <span className="mr-3">Start:</span>
        <DatePicker
          className="w-16"
          dateFormat="MM/yyyy"
          placeholderText="Pick a date"
          selected={date.start}
          showMonthYearPicker
          onChange={(date) => {
            if (Array.isArray(date)) {
              setStartDate(date[0]);
            } else if (date) {
              setStartDate(date);
            } else {
              setStartDate(new Date());
            }
          }}
        />
      </label>
      <label className="flex justify-between pr-5 flex-wrap">
        <span className="">End:</span>
        <DatePicker
          className="w-16"
          dateFormat="MM/yyyy"
          placeholderText="Present"
          selected={date.end}
          showMonthYearPicker
          onChange={(date) => {
            if (Array.isArray(date)) {
              setEndDate(date[0]);
            } else if (date) {
              setEndDate(date);
            } else {
              setEndDate(null);
            }
          }}
        />
      </label>
      <label className="flex items-center">
        <span className="mr-3">Present?</span>
        <input
          checked={!date.end}
          type="checkbox"
          onChange={(e) => setEndDate(e.target.checked ? null : new Date())}
        />
      </label>
    </p>
  );
}
