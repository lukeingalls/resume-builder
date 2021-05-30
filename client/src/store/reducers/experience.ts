import { createReducer } from "@reduxjs/toolkit";
import {
  setExperienceCompany,
  setExperienceEndDate,
  setExperiencePosition,
  setExperienceStartDate,
} from "@store/actions/experience";
import resume from "../../mock_data/resume";

const initialExperience = resume.sections.experience!;

const exports = {
  experience: createReducer(initialExperience, (builder) => {
    builder
      .addCase(setExperienceEndDate, (state, action) => {
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
      .addCase(setExperienceCompany, (state, action) => {
        const { company, idx } = action.payload;
        if (!state.details?.[idx]) return;
        state.details[idx].company = company;
      })
      .addCase(setExperiencePosition, (state, action) => {
        const { position, idx } = action.payload;
        if (!state.details?.[idx]) return;
        state.details[idx].position = position;
      })
      .addCase(setExperienceStartDate, (state, action) => {
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
