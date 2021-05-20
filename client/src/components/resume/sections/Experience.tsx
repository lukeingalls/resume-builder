import { ExperienceSection, isSkills } from "../../../new_types";
import { getDateMonthString } from "@utilities/utils";
import SectionContainer from "@resume-themes/SectionContainer";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import React from "react";

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
                    <li className="list-disc list-item list-inside">
                      {bullet}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </SectionContainer>
    );
  }
);

export default Experience;
