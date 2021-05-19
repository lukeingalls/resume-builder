import { ExperienceSection, isSkills } from "../../../new_types";
import { getDateMonthString } from "@utilities/utils";

interface ExperienceProps {
  experiences: ExperienceSection;
}

function Experience({ experiences }: ExperienceProps) {
  return (
    <div>
      <h3 className="text-lg font-bold">{experiences.type}</h3>
      <hr className="my-5" />
      {experiences.details.map((experienceItem) => (
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

export default Experience;
