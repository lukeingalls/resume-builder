import { createReducer } from "@reduxjs/toolkit";
import {
  setEducationDegree,
  setEducationEndDate,
  setEducationSchool,
  setEducationStartDate,
} from "@store/actions/education";
import resume from "../../mock_data/resume";

// const initialEducation: Partial<TEducationSection> = {
//   type: "Education",
// };

const initialEducation = resume.sections.education!;

const exports = {
  education: createReducer(initialEducation, (builder) => {
    builder
      .addCase(setEducationEndDate, (state, action) => {
        const { date, idx } = action.payload;
        const detail = state.details?.[idx];
        if (!detail) return;
        let previousDate = detail.date;
        if (!previousDate) {
          previousDate = {
            start: new Date(),
            end: date,
          };
        } else {
          previousDate.end = date;
        }
      })
      .addCase(setEducationDegree, (state, action) => {
        const { degree, idx } = action.payload;
        if (!state.details?.[idx]) return;
        state.details[idx].degree = degree;
      })
      .addCase(setEducationSchool, (state, action) => {
        const { school, idx } = action.payload;
        if (!state.details?.[idx]) return;
        state.details[idx].school = school;
      })
      .addCase(setEducationStartDate, (state, action) => {
        const { date, idx } = action.payload;
        const detail = state.details?.[idx];
        if (!detail) return;
        let previousDate = detail.date;
        if (!previousDate) {
          previousDate = {
            start: date,
            end: null,
          };
        } else {
          previousDate.start = date;
        }
      });
  }),
};

export default exports;
