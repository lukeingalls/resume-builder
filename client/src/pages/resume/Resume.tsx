import resume from "../../mock_data/resume";

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

export default function Resume() {
  const printUrl = (url: URL) => {
    return `${url.hostname}${url.pathname}`;
  };

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
      <h3 className="text-lg font-bold">About Me</h3>
      <hr className="my-5" />
      <p>{resume.about_me.description}</p>
      <div>
        <h3 className="text-lg font-bold">Experience</h3>
        <hr className="my-5" />
        {resume.experience.map((experience) => (
          <div className="grid grid-cols-12">
            <p className="col-span-3">
              {getDateMonthString(experience.start_date)} -{" "}
              {getDateMonthString(experience.end_date) || "present"}
            </p>
            <div className="col-span-9">
              <h4 className="text-lg font-bold">
                {experience.position}, {experience.company}
              </h4>
              <p className="italic">{experience.location}</p>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li className="list-disc list-item list-inside">{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-bold">Education</h3>
        <hr className="my-5" />
        {resume.education.map((education) => (
          <div className="grid grid-cols-12">
            <p className="col-span-3">
              {getDateMonthString(education.start_date)} -{" "}
              {getDateMonthString(education.end_date) || "Present"}
            </p>
            <div className="col-span-9">
              <h4 className="text-lg font-bold">
                {education.degree}, {education.university}
              </h4>
              <ul>
                {education.bullets.map((bullet) => (
                  <li className="list-disc list-item list-inside">{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-bold">Skills</h3>
        <hr className="my-5" />
        <div className="grid grid-cols-12">
          {resume.skills.map((skills) => (
            <>
              <span className="col-span-3" />
              <div className="col-span-9 flex items-center">
                {skills.level && <>{renderLevels(skills.level)}</>}
                <p className="pl-4">{skills.skill}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
