import DetailsContainer from "./DetailsConatiner";
import { TExperienceDetails } from "../../../types";
import { getDateMonthString } from "@utilities/utils";
import DisplayBullets from "./DisplayBullets";

interface ExperienceDetailsProps {
  experiences: TExperienceDetails[];
}

export default function ExperienceDetails({
  experiences,
}: ExperienceDetailsProps) {
  return (
    <>
      {experiences.map((experience, idx) => {
        const { date, location } = experience;
        const dateString = date
          ? `${getDateMonthString(date.start)} — ${getDateMonthString(
              date.end
            )}`
          : "";
        return (
          <DetailsContainer>
            {date && <p className="col-span-3">{dateString}</p>}
            <div className="col-span-9">
              <h4 className="text-lg font-bold">
                {experience.position}, {experience.company}
              </h4>
              {location && (
                <p className="italic">
                  {location.city}, {location.state}
                </p>
              )}
              <DisplayBullets
                bullets={experience.bullets}
                type={"Experience"}
                idx={idx}
              />
            </div>
          </DetailsContainer>
        );
      })}
    </>
  );
}
