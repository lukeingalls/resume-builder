import {
  setExperienceCompany,
  setExperienceEndDate,
  setExperiencePosition,
  setExperienceStartDate,
} from "@store/actions/experience";
import { useAppDispatch } from "@store/hooks";

export default function useExperienceReducers(idx: number) {
  const dispatch = useAppDispatch();

  return {
    setCompany: (company: string) =>
      dispatch(setExperienceCompany({ company, idx })),
    setEndDate: (date: Date | null) =>
      dispatch(setExperienceEndDate({ date, idx })),
    setPosition: (position: string) =>
      dispatch(setExperiencePosition({ position, idx })),
    setStartDate: (date: Date) =>
      dispatch(setExperienceStartDate({ date, idx })),
  };
}
