import { createAction } from "@reduxjs/toolkit";
import { Resume } from "new_types";

export const setResume = createAction<Resume | undefined>("SET_RESUME");

export const rearrangeSection = createAction<{
  startIdx: number;
  endIdx: number;
}>("REARRANGE_SECTION");
