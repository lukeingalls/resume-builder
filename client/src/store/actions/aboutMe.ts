import { createAction } from "@reduxjs/toolkit";

export const setAboutMeDescription = createAction<{ description: string }>(
  "SET_ABOUT_ME_DESCRIPTION"
);
