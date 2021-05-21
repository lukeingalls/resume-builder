import { createReducer } from "@reduxjs/toolkit";
import resume from "../../mock_data/resume";
import {
  rearrangeBullets,
  rearrangeSection,
  setResume,
} from "../actions/resume";

const exports = {
  resume: createReducer(resume, (builder) => {
    builder.addCase(setResume, (state, action) => action.payload);
    builder.addCase(rearrangeSection, (state, action) => {
      const sections = state.sections;
      const { startIdx, endIdx } = action.payload;
      if (startIdx === endIdx) return state;
      const [sectionToMove] = sections.splice(startIdx, 1);
      const reOrderedSections = [
        ...sections.slice(0, endIdx),
        sectionToMove,
        ...sections.slice(endIdx),
      ];
      state.sections = reOrderedSections;
      return state;
    });
    builder.addCase(rearrangeBullets, (state, action) => {
      const { type, idx, startIdx, endIdx } = action.payload;
      console.log(type, idx, startIdx, endIdx);
      // Decompose state and check for errors
      if (startIdx === endIdx) return state;
      const section = state.sections.find((section) => section.type === type);
      if (!section || !section.details) return state;
      if (typeof idx === "undefined" && section.details.length !== 0)
        return state;

      const { details } = section;
      const detail = details[idx];
      if (!detail.bullets) return state;
      // Reorder bullets
      const [bulletToMove] = detail.bullets.splice(startIdx, 1);
      const reorderedBullets = [
        ...detail.bullets.slice(0, endIdx),
        bulletToMove,
        ...detail.bullets.slice(endIdx),
      ];

      // Recompose state
      detail.bullets = reorderedBullets;
      details[idx] = detail;
      section.details = details;
      state.sections[state.sections.indexOf(section)] = section;
      return state;
    });
  }),
};

export default exports;
