import { createReducer } from "@reduxjs/toolkit";
import resume from "../../mock_data/resume";
import { rearrangeSection, setResume } from "../actions/resume";

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
  }),
};

export default exports;
