import { createAction } from "@reduxjs/toolkit";
import { TResume } from "types";

export const changeAboutMeDescription = createAction<{ description: string }>(
  "CHANGE_ABOUT_ME_DESCRIPTION"
);
export const changeName = createAction<{ name: string }>("CHANGE_NAME");
export const changeTitle = createAction<{ title: string }>("CHANGE_TITLE");

export const setResume = createAction<TResume | undefined>("SET_RESUME");

export const rearrangeSection =
  createAction<{
    startIdx: number;
    endIdx: number;
  }>("REARRANGE_SECTION");

export const rearrangeBullets =
  createAction<{
    type: string;
    idx: number;
    startIdx: number;
    endIdx: number;
  }>("REARRANGE_BULLETS");
