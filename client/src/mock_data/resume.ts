import { Resume, User } from "../types";

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

const resume: Resume = {
  user: me,
  about_me: {
    description:
      "I am a fullstack developer with a passion for finance. I'm looking for positions in an entreprenurial setting.",
  },
  additional_sections: [
    {
      title: "Projects",
      items: [
        {
          title: "Reddit Reader",
          description: "",
        },
      ],
    },
  ],
  education: [
    {
      bullets: [
        "3.98 Overall GPA, 4.0 Major GPA",
        "Member of Tau Beta Pi",
        "Sewall scholarship recipient",
      ],
      degree: "Computer Science, BS",
      end_date: new Date(2021, 5),
      start_date: new Date(2018, 8),
      university: "University of Colorado Boulder",
    },
  ],
  experience: [
    {
      bullets: [
        "Styled and maintained three Ghost Blogs.",
        "Launched plugin infastructure for the video editing studio.",
        "Created internal tools for content team to leverage nascent trends.",
      ],
      company: "Kapwing",
      end_date: null,
      position: "Fullstack Engineer",
      location: "San Francisco, CA",
      start_date: new Date(2021, 4),
    },
    {
      bullets: [
        "Created Angular and Stenciljs components for Schwab's unified design system (think bootstrap for Schwab).",
        "Wrote and maintained BEM CSS",
        "Fixed accessibility issues",
      ],
      company: "Charles Schwab",
      end_date: new Date(2020, 5),
      location: "Lone Tree, CO",
      position: "Frontend Engineering Intern",
      start_date: new Date(2020, 8),
    },
  ],
  skills: [
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
};

export default resume;
