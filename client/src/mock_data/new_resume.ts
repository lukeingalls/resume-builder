import {
  AboutMeSection,
  Details,
  EducationSection,
  ExperienceSection,
  Resume,
  Section,
  SkillsSection,
} from "../new_types";
import { User } from "../types";

const me: User = {
  address: {
    city: "Parker",
    country: "USA",
    street_address: "12423 N 5th St",
    state: "CO",
    zip: "80134",
  },
  contact_info: {
    email: "lukeingalls@me.com",
    github: new URL("https://github.com/lukeingalls"),
    linkedin: new URL("https://www.linkedin.com/in/luke-ingalls/"),
    personal_site: new URL("http://lukeingalls.com"),
    phone_number: "720-467-3609",
  },
  current_title: "Fullstack Engineer",
  name: "Luke Ingalls",
};

const aboutMe: AboutMeSection = {
  header: "About Me",
  description:
    "I am a fullstack developer with a passion for finance. I'm looking for positions in an entreprenurial setting.",
  type: "About Me",
};

const education: EducationSection = {
  header: "Education",
  details: [
    {
      school: "University of Colorado Boulder",
      degree: "Computer Science, BS",
      bullets: [
        "3.98 Overall GPA, 4.0 Major GPA",
        "Member of Tau Beta Pi",
        "Sewall scholarship recipient",
      ],
      date: {
        end: new Date(2021, 5),
        start: new Date(2018, 8),
      },
    },
  ],
  type: "Education",
};

const experience: ExperienceSection = {
  header: "Experience",
  details: [
    {
      bullets: [
        "Styled and maintained three Ghost Blogs.",
        "Launched plugin infastructure for the video editing studio.",
        "Created internal tools for content team to leverage nascent trends.",
      ],
      date: {
        end: null,
        start: new Date(2021, 4),
      },
      company: "Kapwing",
      location: {
        city: "San Francisco",
        state: "CA",
      },
      position: "Fullstack Software Engineer",
    },
    {
      bullets: [
        "Created Angular and Stenciljs components for Schwab's unified design system (think bootstrap for Schwab).",
        "Wrote and maintained BEM CSS",
        "Fixed accessibility issues",
      ],
      company: "Charles Schwab",
      date: {
        end: new Date(2020, 8),
        start: new Date(2020, 5),
      },
      location: {
        city: "Lone Tree",
        state: "CA",
      },
      position: "Frontend Engineering Intern",
    },
  ],
  type: "Experience",
};

const skills: SkillsSection = {
  header: "Skills",
  details: [
    {
      bullets: [
        {
          skill: "React",
          level: 5,
        },
        {
          skill: "Javascript",
          level: 4,
        },
        {
          skill: "Python",
          level: 3,
        },
        {
          skill: "Node",
          level: 4,
        },
      ],
    },
  ],
  type: "Skills",
};

const projects: Section<Details> = {
  header: "Projects",
  details: [
    {
      description:
        "Chime is a survey tool that injects questions into a user's browser as they go about their normal work. This entailed a web extension for the end user and a website for survey administrators. Technologies included: Javascript, React, Stencil, Sass, and Google's Firebase.",
      subtitle: "Startup",
      title: "Chime",
    },
    {
      description:
        "Scraped Reddit pages to obtain user replies and then generate a video narrated by the computer. This was consistent with YouTube videos being made at the time. Independent Project. Technologies included: FFMPEG and Python.",
      subtitle: "Video Creation",
      title: "Reddit Reader",
    },
  ],
};

const resume: Resume = {
  user: me,
  sections: [aboutMe, education, experience, skills, projects],
};

export default resume;
