import { setEndDate, setStartDate } from "@store/actions/resume";
import { useAppDispatch } from "@store/hooks";
import { TDate } from "types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

interface DateSelectorProps {
  date?: TDate;
  idx: number;
  type: string;
}

export default function DateSelector({ date, idx, type }: DateSelectorProps) {
  const dispatch = useAppDispatch();
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
          onChange={(date) =>
            dispatch(
              setStartDate({
                date: Array.isArray(date) ? date[0] : date ? date : new Date(),
                idx,
                sectionType: type,
              })
            )
          }
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
          onChange={(date) =>
            dispatch(
              setEndDate({
                date: Array.isArray(date) ? date[0] : date ? date : null,
                idx,
                sectionType: type,
              })
            )
          }
        />
      </label>
      <label className="flex items-center">
        <span className="mr-3">Present?</span>
        <input
          checked={!date.end}
          type="checkbox"
          onChange={(e) =>
            dispatch(
              setEndDate({
                date: e.target.checked ? null : new Date(),
                sectionType: type,
                idx,
              })
            )
          }
        />
      </label>
    </p>
  );
}
