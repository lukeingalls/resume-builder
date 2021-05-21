import { SkillsSection } from "../../../new_types";
import SectionContainer from "@resume-layouts/SectionContainer";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import React from "react";
import SkillsBullets from "../layouts/DisplaySkills";

interface SkillsProps extends React.ComponentPropsWithoutRef<"div"> {
  skills: SkillsSection;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

const Skills = React.forwardRef<HTMLDivElement, SkillsProps>(
  ({ skills, draggableProps, dragHandleProps }, ref) => {
    return (
      <SectionContainer
        ref={ref}
        title={skills.type}
        draggableProps={draggableProps}
        dragHandleProps={dragHandleProps}
      >
        <SkillsBullets skills={skills.details} />
      </SectionContainer>
    );
  }
);

export default Skills;
