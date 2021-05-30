import { createAction } from "@reduxjs/toolkit";

export const setExperienceCompany = createAction<{
  company: string;
  idx: number;
}>("SET_EXPERIENCE_COMPANY");

export const setExperienceEndDate = createAction<{
  date: Date | null;
  idx: number;
}>("SET_EXPERIENCE_END_DATE");

export const setExperiencePosition = createAction<{
  position: string;
  idx: number;
}>("SET_EXPERIENCE_POSITION");

export const setExperienceStartDate = createAction<{
  date: Date;
  idx: number;
}>("SET_EXPERIENCE_START_DATE");
