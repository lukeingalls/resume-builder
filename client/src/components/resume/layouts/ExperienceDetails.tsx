import DetailsContainer from "./DetailsConatiner";
import { TExperienceDetails } from "../../../types";
import { getDateMonthString } from "@utilities/utils";
import DisplayBullets from "./DisplayBullets";
import Input from "@components/utilities/Input";
import { useAppDispatch } from "@store/hooks";
import {
  setExperienceCompany,
  setExperiencePosition,
} from "@store/actions/resume";

interface ExperienceDetailsProps {
  experiences: TExperienceDetails[];
}

export default function ExperienceDetails({
  experiences,
}: ExperienceDetailsProps) {
  const dispatch = useAppDispatch();
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
              <h4 className="text-lg">
                <Input
                  className="font-bold"
                  placeholder="Job Title"
                  onChange={(e) =>
                    dispatch(
                      setExperiencePosition({ position: e.target.value, idx })
                    )
                  }
                  value={experience.position}
                />
                ,{" "}
                <Input
                  placeholder="Company"
                  onChange={(e) =>
                    dispatch(
                      setExperienceCompany({ company: e.target.value, idx })
                    )
                  }
                  value={experience.company}
                />
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
