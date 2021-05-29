import DetailsContainer from "./DetailsConatiner";
import { TEducationDetails } from "../../../types";
import DisplayBullets from "./DisplayBullets";
import Input from "@components/utilities/Input";
import DateSelector from "./DateSelector";
import useEducationReducers from "@store/dispatchers/education";

interface EducationDetailProps {
  education: TEducationDetails;
  idx: number;
}

export default function EducationDetail({
  education,
  idx,
}: EducationDetailProps) {
  const { setEndDate, setDegree, setSchool, setStartDate } =
    useEducationReducers(idx);
  const { date, location } = education;
  return (
    <DetailsContainer>
      <DateSelector
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        date={date}
      />
      <div className="col-span-9">
        <h4 className="text-lg font-bold">
          <Input
            className="text-lg font-bold"
            placeholder="Degree"
            onChange={(e) => setDegree(e.target.value)}
            value={education.degree}
          />
          ,{" "}
          <Input
            placeholder="Institution"
            onChange={(e) => setSchool(e.target.value)}
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
}
