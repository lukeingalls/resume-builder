import { EducationSection } from "../../../new_types";
import { getDateMonthString } from "@utilities/utils";
import SectionContainer from "@resume-layouts/SectionContainer";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import React from "react";
import DisplayBullets from "../layouts/DisplayBullets";

interface EducationProps extends React.ComponentPropsWithoutRef<"div"> {
  educations: EducationSection;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

const Education = React.forwardRef<HTMLDivElement, EducationProps>(
  ({ educations, draggableProps, dragHandleProps }, ref) => {
    return (
      <SectionContainer
        title={educations.header}
        ref={ref}
        draggableProps={draggableProps}
        dragHandleProps={dragHandleProps}
      >
        {educations.details.map((education, idx) => (
          <div className="grid grid-cols-12">
            <p className="col-span-3">
              {getDateMonthString(education.date!.start)} —{" "}
              {getDateMonthString(education.date!.end) || "Present"}
            </p>
            <div className="col-span-9">
              <h4 className="text-lg font-bold">
                {education.degree}, {education.school}
              </h4>
              <DisplayBullets
                bullets={education.bullets}
                type={educations.header}
                idx={idx}
              />
            </div>
          </div>
        ))}
      </SectionContainer>
    );
  }
);

export default Education;
