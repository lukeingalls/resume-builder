import { createAction } from "@reduxjs/toolkit";

export const setEducationDegree = createAction<{ degree: string }>(
  "SET_EDUCATION_DEGREE"
);

export const setEducationInstitution = createAction<{ institution: string }>(
  "SET_EDUCATION_DEGREE"
);
