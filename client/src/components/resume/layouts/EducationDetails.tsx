import DetailsContainer from "./DetailsConatiner";
import { TEducationDetails } from "../../../types";
import DisplayBullets from "./DisplayBullets";
import Input from "@components/utilities/Input";
import { useAppDispatch } from "@store/hooks";
import {
  setEducationDegree,
  setEducationInstitution,
} from "@store/actions/resume";
import DateSelector from "./DateSelector";

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
        return (
          <DetailsContainer>
            {date && <DateSelector idx={idx} type="Education" date={date} />}
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
