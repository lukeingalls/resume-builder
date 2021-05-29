import { createAction } from "@reduxjs/toolkit";

export const setEducationEndDate = createAction<{
  date: Date | null;
  idx: number;
}>("SET_EDUCATION_END_DATE");

export const setEducationDegree = createAction<{ degree: string; idx: number }>(
  "SET_EDUCATION_DEGREE"
);

export const setEducationSchool = createAction<{
  school: string;
  idx: number;
}>("SET_EDUCATION_SCHOOL");

export const setEducationStartDate = createAction<{
  date: Date;
  idx: number;
}>("SET_EDUCATION_START_DATE");

export const setEducationBullets = createAction<{}>("SET_EDUCATION_BULLETS");
