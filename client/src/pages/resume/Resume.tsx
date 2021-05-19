import resume from "../../mock_data/resume";
import {
  isAboutMeSection,
  isEducationSection,
  isExperienceSection,
  isSkillsSection,
} from "../../new_types";
import AboutMe from "@resume-sections/AboutMe";
import Education from "@resume-sections/Education";
import Experience from "@resume-sections/Experience";
import Skills from "@resume-sections/Skills";

export default function Resume() {
  const printUrl = (url: URL) => {
    return `${url.hostname}${url.pathname}`;
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{resume.user.name}</h1>
      <h2 className="text-2xl">{resume.user.current_title}</h2>
      <div className="grid grid-cols-2 grid-rows-2 my-4">
        <span>
          <span className="font-bold">Phone</span>{" "}
          {resume.user.contact_info.phone_number}
        </span>
        <span>
          <span className="font-bold">Linkedin</span>{" "}
          {printUrl(resume.user.contact_info.linkedin)}
        </span>
        <span>
          <span className="font-bold">E-mail</span>{" "}
          {resume.user.contact_info.email}
        </span>
        <span>
          <span className="font-bold">Github</span>{" "}
          {printUrl(resume.user.contact_info.github)}
        </span>
      </div>
      {resume.sections.map((section) => {
        if (isAboutMeSection(section)) return <AboutMe about_me={section} />;
        if (isEducationSection(section))
          return <Education educations={section} />;
        if (isExperienceSection(section))
          return <Experience experiences={section} />;
        if (isSkillsSection(section)) return <Skills skills={section} />;
        return null;
      })}
    </div>
  );
}
