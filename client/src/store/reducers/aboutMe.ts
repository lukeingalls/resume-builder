import { createReducer } from "@reduxjs/toolkit";
import { setAboutMeDescription } from "@store/actions/aboutMe";
import resume from "../../mock_data/resume";

const initialAboutMe = resume.sections.aboutMe!;

const exports = {
  aboutMe: createReducer(initialAboutMe, (builder) => {
    builder.addCase(setAboutMeDescription, (state, action) => {
      const { description } = action.payload;
      state.description = description;
    });
  }),
};

export default exports;
