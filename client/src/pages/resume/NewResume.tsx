import resume from "../../mock_data/new_resume";
import {
  AboutMeSection,
  EducationSection,
  ExperienceSection,
  isAboutMeSection,
  isEducationSection,
  isExperienceSection,
  isSkills,
  isSkillsSection,
  SkillsSection,
} from "../../new_types";

const getDateMonthString = (date: Date | null) => {
  if (!date) return date;
  let month = "";
  switch (date.getMonth()) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  const year = date.getFullYear().toString();
  return `${month} ${year}`;
};

const renderLevels = (level: number) => {
  let chunks: React.ReactNode[] = [];
  for (let i = 1; i <= 5; i++) {
    chunks = [...chunks, <LevelChunk filled={i <= level} />];
  }
  return chunks;
};
interface LevelChunkProps {
  filled?: boolean;
}

function LevelChunk({ filled = false }: LevelChunkProps) {
  return (
    <div
      className={`inline-block w-5 h-5 border mx-1 rounded-md border-gray-600 ${
        filled ? "bg-gray-500" : "bg-white"
      }`}
    />
  );
}

interface AboutMeProps {
  about_me: AboutMeSection;
}

function AboutMe({ about_me }: AboutMeProps) {
  return (
    <>
      <h3 className="text-lg font-bold">{about_me.header}</h3>
      <hr className="my-5" />
      <p>{about_me.description}</p>
    </>
  );
}

interface EducationProps {
  education: EducationSection;
}

function Education({ education }: EducationProps) {
  return (
    <div>
      <h3 className="text-lg font-bold">{education.header}</h3>
      <hr className="my-5" />
      {education.details.map((educationItem) => (
        <div className="grid grid-cols-12">
          <p className="col-span-3">
            {getDateMonthString(educationItem.date!.start)} —{" "}
            {getDateMonthString(educationItem.date!.end) || "Present"}
          </p>
          <div className="col-span-9">
            <h4 className="text-lg font-bold">
              {educationItem.degree}, {educationItem.school}
            </h4>
            <ul>
              {educationItem.bullets &&
                !isSkills(educationItem.bullets) &&
                educationItem.bullets.map((bullet) => {
                  if (bullet && typeof bullet === "string")
                    return (
                      <li className="list-disc list-item list-inside">
                        {bullet}
                      </li>
                    );
                  return null;
                })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

interface ExperienceProps {
  experience: ExperienceSection;
}

function Experience({ experience }: ExperienceProps) {
  return (
    <div>
      <h3 className="text-lg font-bold">{experience.type}</h3>
      <hr className="my-5" />
      {experience.details.map((experienceItem) => (
        <div className="grid grid-cols-12">
          <p className="col-span-3">
            {getDateMonthString(experienceItem.date!.start)} —{" "}
            {getDateMonthString(experienceItem.date!.end) || "present"}
          </p>
          <div className="col-span-9">
            <h4 className="text-lg font-bold">
              {experienceItem.position}, {experienceItem.company}
            </h4>
            <p className="italic">{`${experienceItem.location!.city}, ${
              experienceItem.location!.state
            }`}</p>
            <ul>
              {experienceItem.bullets &&
                !isSkills(experienceItem.bullets) &&
                experienceItem.bullets.map((bullet) => (
                  <li className="list-disc list-item list-inside">{bullet}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

interface SkillsProps {
  skills: SkillsSection;
}

function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <h3 className="text-lg font-bold">{skills.type}</h3>
      <hr className="my-5" />
      <div className="grid grid-cols-12">
        {skills.details.map((skill) => (
          <>
            {skill.bullets &&
              isSkills(skill.bullets) &&
              skill.bullets.map((bullet) => (
                <>
                  <span className="col-span-3" />
                  <div className="col-span-9 flex items-center">
                    {bullet.level && renderLevels(bullet.level)}
                    <p className="pl-4">{bullet.skill}</p>
                  </div>
                </>
              ))}
          </>
        ))}
      </div>
    </div>
  );
}

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
          return <Education education={section} />;
        if (isExperienceSection(section))
          return <Experience experience={section} />;
        if (isSkillsSection(section)) return <Skills skills={section} />;
        return null;
      })}
    </div>
  );
}
