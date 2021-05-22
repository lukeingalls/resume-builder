import { TExperienceSection } from "../../../types";
import SectionContainer from "@resume-layouts/SectionContainer";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import React from "react";
import ExperienceDetails from "../layouts/ExperienceDetails";

interface ExperienceProps extends React.ComponentPropsWithoutRef<"div"> {
  experiences: TExperienceSection;
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
        <ExperienceDetails experiences={experiences.details} />
      </SectionContainer>
    );
  }
);

export default Experience;
