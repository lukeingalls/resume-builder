import { Resume, User } from "../types";

const me: User = {
  address: {
    city: "Parker",
    state: "CO",
  },
  email: "lukeingalls@me.com",
  name: "Luke Ingalls",
  phone_number: "720-467-3609",
};

const resume: Resume = {
  user: me,
  summary:
    "I'm a fullstack engineer with a love for finance. Very interested in entreprenurial endeavors.",
  sections: [
    {
      title: "Professional History",
      activities: [
        {
          title: "Kapwing",
          description:
            "Worked as a fullstack engineer on growth and greenfield projects.",
          start_date: new Date(2021, 4),
          end_date: null,
          bullets: [
            "Maintained three Ghost blogs.",
            "Created and launched plugin infastructure.",
            "Launched internal tool to allow content team to spot nascent trends.",
          ],
        },
        {
          title: "Charles Schwab",
          description:
            "I was a frontend intern working on Schwab's unified design system.",
          start_date: new Date(2020, 5),
          end_date: new Date(2020, 8),
          bullets: [
            "Wrote reusable components in Angular and StencilJs",
            "Resolved accessbility issues.",
            "Created BEM CSS",
          ],
        },
      ],
    },
    {
      title: "Projects",
      activities: [
        {
          title: "Reddit Reader",
          description:
            "A web scraping tool that would take top reddit posts and convert them into a robot-narrated video",
        },
      ],
    },
  ],
};

export default resume;
