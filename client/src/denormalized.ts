/* eslint-disable */
import {
  TAboutMeSection,
  TEducationSection,
  TExperienceSection,
  TSkillsSection,
} from "types";

// this file is an initial diagram of a denormalized version of the resume store
export const x = undefined;

type sections = {
  aboutMe?: TAboutMeSection;
  education?: TEducationSection;
  experience?: TExperienceSection;
  skills?: TSkillsSection;
};

type store = {
  /**
   * The valid sections
   */
  sections: sections;

  /**
   * section ordering
   */
  sectionsOrder: Array<keyof sections>;
};

const experience = {
  header: "Experience",
  details: {
    0: {
      bullets: [
        "Styled and maintained three Ghost Blogs.",
        "Launched plugin infastructure for the video editing studio.",
        "Created internal tools for content team to leverage nascent trends.",
      ],
      date: {
        end: null,
        start: new Date(2021, 3),
      },
      company: "Kapwing",
      location: {
        city: "San Francisco",
        state: "CA",
      },
      position: "Fullstack Software Engineer",
    },
    1: {
      bullets: {
        0: "Created Angular and Stenciljs components for Schwab's unified design system (think bootstrap for Schwab).",
        1: "Wrote and maintained BEM CSS",
        2: "Fixed accessibility issues",
      },
      bulletsOrder: [0, 1, 2],
      company: "Charles Schwab",
      date: {
        end: new Date(2020, 7),
        start: new Date(2020, 4),
      },
      location: {
        city: "Lone Tree",
        state: "CA",
      },
      position: "Frontend Engineering Intern",
    },
  },
  experienceOrder: [0, 1],
  type: "Experience",
};
