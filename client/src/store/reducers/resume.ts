import { createReducer } from "@reduxjs/toolkit";
import resume from "../../mock_data/resume";
import { setResume } from "../actions/resume";

const exports = {
  resume: createReducer(resume, (builder) => {
    builder.addCase(setResume, (state, action) => action.payload);
  }),
};

export default exports;
