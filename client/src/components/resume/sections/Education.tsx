import { TEducationSection } from "../../../types";
import SectionContainer from "@resume-layouts/SectionContainer";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import React from "react";
import EducationDetails from "../layouts/EducationDetails";

interface EducationProps extends React.ComponentPropsWithoutRef<"div"> {
  educations: TEducationSection;
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
        <EducationDetails education={educations.details} />
      </SectionContainer>
    );
  }
);

export default Education;
