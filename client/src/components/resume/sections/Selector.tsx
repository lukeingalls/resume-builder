import {
  Details,
  isAboutMeSection,
  isEducationSection,
  isExperienceSection,
  isSkillsSection,
  Section,
} from "../../../new_types";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import React from "react";

interface SectionSelectorProps extends React.ComponentPropsWithoutRef<"div"> {
  section: Section<Details>;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

const SectionSelector = React.forwardRef<HTMLDivElement, SectionSelectorProps>(
  ({ section, draggableProps, dragHandleProps }: SectionSelectorProps, ref) => {
    if (isAboutMeSection(section))
      return (
        <AboutMe
          about_me={section}
          draggableProps={draggableProps}
          dragHandleProps={dragHandleProps}
          ref={ref}
        />
      );
    if (isEducationSection(section))
      return (
        <Education
          educations={section}
          draggableProps={draggableProps}
          dragHandleProps={dragHandleProps}
          ref={ref}
        />
      );
    if (isExperienceSection(section))
      return (
        <Experience
          experiences={section}
          draggableProps={draggableProps}
          dragHandleProps={dragHandleProps}
          ref={ref}
        />
      );
    if (isSkillsSection(section))
      return (
        <Skills
          skills={section}
          draggableProps={draggableProps}
          dragHandleProps={dragHandleProps}
          ref={ref}
        />
      );
    // console.log(null);
    return null;
  }
);

export default SectionSelector;
