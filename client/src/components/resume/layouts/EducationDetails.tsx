import DetailsContainer from "./DetailsConatiner";
import { TEducationDetails } from "../../../types";
import { getDateMonthString } from "@utilities/utils";
import DisplayBullets from "./DisplayBullets";
import Input from "@components/utilities/Input";
import { useAppDispatch } from "@store/hooks";
import {
  setEducationDegree,
  setEducationInstitution,
} from "@store/actions/resume";

interface EducationDetailsProps {
  education: TEducationDetails[];
}

export default function EducationDetails({
  education: _education,
}: EducationDetailsProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      {_education.map((education, idx) => {
        const { date, location } = education;
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
                <Input
                  className="text-lg font-bold"
                  placeholder="Degree"
                  onChange={(e) =>
                    dispatch(
                      setEducationDegree({ degree: e.target.value, idx })
                    )
                  }
                  value={education.degree}
                />
                ,{" "}
                <Input
                  placeholder="Institution"
                  onChange={(e) =>
                    dispatch(
                      setEducationInstitution({
                        institution: e.target.value,
                        idx,
                      })
                    )
                  }
                  value={education.school}
                />
              </h4>
              {location && (
                <p className="italic">
                  {location.city}, {location.state}
                </p>
              )}
              <DisplayBullets
                bullets={education.bullets}
                type={"Education"}
                idx={idx}
              />
            </div>
          </DetailsContainer>
        );
      })}
    </>
  );
}
