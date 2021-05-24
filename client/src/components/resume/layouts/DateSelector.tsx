import { setEndDate, setStartDate } from "@store/actions/resume";
import { useAppDispatch } from "@store/hooks";
import { getDateMonthString } from "@utilities/utils";
import { TDate } from "types";

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
      <label className="flex justify-between pr-5">
        Start:{" "}
        <input
          type="month"
          value={getDateMonthString(date.start)}
          onChange={(e) => {
            dispatch(
              setStartDate({
                date: e.target.value,
                idx,
                sectionType: type,
              })
            );
          }}
        />
      </label>
      <label className="flex justify-between pr-5">
        End:{" "}
        <input
          type="month"
          value={`${getDateMonthString(date.end)}`}
          onChange={(e) =>
            dispatch(
              setEndDate({
                date: e.target.value,
                idx,
                sectionType: type,
              })
            )
          }
        />
      </label>
      <label className="block">
        Present?{" "}
        <input
          type="checkbox"
          checked={!date.end}
          onChange={(e) =>
            dispatch(
              setEndDate({
                date: e.target.checked ? null : getDateMonthString(new Date()),
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
