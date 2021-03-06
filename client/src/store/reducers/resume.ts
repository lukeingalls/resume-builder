import { createReducer } from "@reduxjs/toolkit";
// import { TEducationSection, TExperienceSection } from "types";
import resume from "../../mock_data/resume";
// import {
//   changeAboutMeDescription,
//   changeName,
//   changeTitle,
//   rearrangeBullets,
//   rearrangeSection,
//   setEducationDegree,
//   setEducationInstitution,
//   setEndDate,
//   setExperienceCompany,
//   setExperiencePosition,
//   setLocationCity,
//   setLocationRemote,
//   setLocationState,
//   setResume,
//   setStartDate,
// } from "../actions/resume";

const exports = {
  resume: createReducer(resume, (builder) => {
    // builder.addCase(changeAboutMeDescription, (state, action) => {
    //   const { description } = action.payload;
    //   const AboutMe = state.sections.find(
    //     (section) => section.type === "About Me"
    //   );
    //   if (!AboutMe) return state;
    //   AboutMe.description = description;
    //   const idx = state.sections.indexOf(AboutMe);
    //   state.sections[idx] = AboutMe;
    //   return state;
    // });
    // builder.addCase(changeName, (state, action) => {
    //   const { name } = action.payload;
    //   state.user.name = name;
    //   return state;
    // });
    // builder.addCase(changeTitle, (state, action) => {
    //   const { title } = action.payload;
    //   state.user.current_title = title;
    //   return state;
    // });
    // builder.addCase(setExperienceCompany, (state, action) => {
    //   const { company, idx: detailsIdx } = action.payload;
    //   const experienceIdx = state.sections.findIndex(
    //     (section) => section.type === "Experience"
    //   );
    //   if (experienceIdx === -1) return state;
    //   const experienceSection = state.sections[
    //     experienceIdx
    //   ] as TExperienceSection;
    //   experienceSection.details[detailsIdx].company = company;
    //   state.sections[experienceIdx] = experienceSection;
    //   return state;
    // });
    // builder.addCase(setExperiencePosition, (state, action) => {
    //   const { position, idx: detailsIdx } = action.payload;
    //   const experienceIdx = state.sections.findIndex(
    //     (section) => section.type === "Experience"
    //   );
    //   if (experienceIdx === -1) return state;
    //   const experienceSection = state.sections[
    //     experienceIdx
    //   ] as TExperienceSection;
    //   experienceSection.details[detailsIdx].position = position;
    //   state.sections[experienceIdx] = experienceSection;
    //   return state;
    // });
    // builder.addCase(setLocationCity, (state, action) => {
    //   const { city, idx: detailsIdx } = action.payload;
    //   const experienceIdx = state.sections.findIndex(
    //     (section) => section.type === "Experience"
    //   );
    //   if (experienceIdx === -1) return state;
    //   const experienceSection = state.sections[
    //     experienceIdx
    //   ] as TExperienceSection;
    //   const location = { ...experienceSection.details[detailsIdx].location };
    //   location.city = city;
    //   experienceSection.details[detailsIdx].location = location;
    //   state.sections[experienceIdx] = experienceSection;
    //   return state;
    // });
    // builder.addCase(setLocationRemote, (state, action) => {
    //   const { remote, idx: detailsIdx } = action.payload;
    //   const experienceIdx = state.sections.findIndex(
    //     (section) => section.type === "Experience"
    //   );
    //   if (experienceIdx === -1) return state;
    //   const experienceSection = state.sections[
    //     experienceIdx
    //   ] as TExperienceSection;
    //   const location = { ...experienceSection.details[detailsIdx].location };
    //   location.remote = remote;
    //   experienceSection.details[detailsIdx].location = location;
    //   state.sections[experienceIdx] = experienceSection;
    //   return state;
    // });
    // builder.addCase(setLocationState, (redux_state, action) => {
    //   const { state, idx: detailsIdx } = action.payload;
    //   const experienceIdx = redux_state.sections.findIndex(
    //     (section) => section.type === "Experience"
    //   );
    //   if (experienceIdx === -1) return redux_state;
    //   const experienceSection = redux_state.sections[
    //     experienceIdx
    //   ] as TExperienceSection;
    //   const location = { ...experienceSection.details[detailsIdx].location };
    //   location.state = state;
    //   experienceSection.details[detailsIdx].location = location;
    //   redux_state.sections[experienceIdx] = experienceSection;
    //   return redux_state;
    // });
    // builder.addCase(setResume, (state, action) => action.payload);
    // builder.addCase(rearrangeSection, (state, action) => {
    //   const sections = state.sections;
    //   const { startIdx, endIdx } = action.payload;
    //   if (startIdx === endIdx) return state;
    //   const [sectionToMove] = sections.splice(startIdx, 1);
    //   const reOrderedSections = [
    //     ...sections.slice(0, endIdx),
    //     sectionToMove,
    //     ...sections.slice(endIdx),
    //   ];
    //   state.sections = reOrderedSections;
    //   return state;
    // });
    // builder.addCase(rearrangeBullets, (state, action) => {
    //   const { type, idx, startIdx, endIdx } = action.payload;
    //   // Decompose state and check for errors
    //   if (startIdx === endIdx) return state;
    //   const section = state.sections.find((section) => section.type === type);
    //   if (!section || !section.details) return state;
    //   if (typeof idx === "undefined" && section.details.length !== 0)
    //     return state;
    //   const { details } = section;
    //   const detail = details[idx];
    //   if (!detail.bullets) return state;
    //   // Reorder bullets
    //   const [bulletToMove] = detail.bullets.splice(startIdx, 1);
    //   const reorderedBullets = [
    //     ...detail.bullets.slice(0, endIdx),
    //     bulletToMove,
    //     ...detail.bullets.slice(endIdx),
    //   ];
    //   // Recompose state
    //   detail.bullets = reorderedBullets;
    //   details[idx] = detail;
    //   section.details = details;
    //   state.sections[state.sections.indexOf(section)] = section;
    //   return state;
    // });
  }),
};

export default exports;
