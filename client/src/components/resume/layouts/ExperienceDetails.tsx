import DetailsContainer from "./DetailsConatiner";
import { TExperienceDetails } from "../../../types";
import DisplayBullets from "./DisplayBullets";
import Input from "@components/utilities/Input";
import { useAppDispatch } from "@store/hooks";
import {
  setExperienceCompany,
  setExperiencePosition,
  setLocationCity,
  setLocationRemote,
  setLocationState,
} from "@store/actions/resume";
import DateSelector from "./DateSelector";

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
        return (
          <DetailsContainer>
            <DateSelector date={date} idx={idx} type="Experience" />
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
              <span className="flex justify-between">
                {location && (
                  <p className="italic">
                    {location.remote ? (
                      "Remote"
                    ) : (
                      <>
                        <Input
                          placeholder="City"
                          value={location.city}
                          onChange={(e) =>
                            dispatch(
                              setLocationCity({ city: e.target.value, idx })
                            )
                          }
                        />
                        ,{" "}
                        <Input
                          placeholder="ST"
                          value={location.state}
                          onChange={(e) =>
                            dispatch(
                              setLocationState({ state: e.target.value, idx })
                            )
                          }
                        />{" "}
                      </>
                    )}
                  </p>
                )}
                <label className="text-sm flex items-center">
                  Remote?
                  <input
                    className="ml-1"
                    type="checkbox"
                    onChange={(e) =>
                      dispatch(
                        setLocationRemote({ remote: e.target.checked, idx })
                      )
                    }
                  />
                </label>
              </span>
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
