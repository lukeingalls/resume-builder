import { createAction } from "@reduxjs/toolkit";
import { TResume } from "new_types";

export const setResume = createAction<TResume | undefined>("SET_RESUME");

export const rearrangeSection = createAction<{
  startIdx: number;
  endIdx: number;
}>("REARRANGE_SECTION");

export const rearrangeBullets = createAction<{
  type: string;
  idx: number;
  startIdx: number;
  endIdx: number;
}>("REARRANGE_BULLETS");
