import {
  setEducationDegree,
  setEducationEndDate,
  setEducationSchool,
  setEducationStartDate,
} from "@store/actions/education";
import { useAppDispatch } from "@store/hooks";

export default function useEducationReducers(idx: number) {
  const dispatch = useAppDispatch();

  return {
    setEndDate: (date: Date | null) =>
      dispatch(setEducationEndDate({ date, idx })),
    setDegree: (degree: string) =>
      dispatch(setEducationDegree({ degree, idx })),
    setSchool: (school: string) =>
      dispatch(setEducationSchool({ school, idx })),
    setStartDate: (date: Date) =>
      dispatch(setEducationStartDate({ date, idx })),
  };
}
