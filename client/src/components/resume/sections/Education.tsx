import { EducationSection, isSkills } from "../../../new_types";
import { getDateMonthString } from "@utilities/utils";
import SectionContainer from "@resume-themes/SectionContainer";

interface EducationProps {
  educations: EducationSection;
}

function Education({ educations }: EducationProps) {
  return (
    <SectionContainer title={educations.header}>
      {educations.details.map((education) => (
        <div className="grid grid-cols-12">
          <p className="col-span-3">
            {getDateMonthString(education.date!.start)} —{" "}
            {getDateMonthString(education.date!.end) || "Present"}
          </p>
          <div className="col-span-9">
            <h4 className="text-lg font-bold">
              {education.degree}, {education.school}
            </h4>
            <ul>
              {education.bullets &&
                !isSkills(education.bullets) &&
                education.bullets.map((bullet) => {
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
    </SectionContainer>
  );
}

export default Education;
