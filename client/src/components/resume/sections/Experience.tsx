import { ExperienceSection } from "../../../new_types";
import { getDateMonthString } from "@utilities/utils";
import SectionContainer from "@resume-layouts/SectionContainer";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import React from "react";
import DisplayBullets from "../layouts/DisplayBullets";

interface ExperienceProps extends React.ComponentPropsWithoutRef<"div"> {
  experiences: ExperienceSection;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
  ({ experiences, draggableProps, dragHandleProps }, ref) => {
    return (
      <SectionContainer
        title={experiences.header}
        ref={ref}
        draggableProps={draggableProps}
        dragHandleProps={dragHandleProps}
      >
        {experiences.details.map((experienceItem, idx) => (
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
              <DisplayBullets
                bullets={experienceItem.bullets}
                type={experiences.type}
                idx={idx}
              />
            </div>
          </div>
        ))}
      </SectionContainer>
    );
  }
);

export default Experience;
