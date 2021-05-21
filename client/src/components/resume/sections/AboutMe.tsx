import SectionContainer from "@resume-layouts/SectionContainer";
import React from "react";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import { AboutMeSection } from "../../../new_types";

interface AboutMeProps extends React.ComponentPropsWithoutRef<"div"> {
  about_me: AboutMeSection;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

const AboutMe = React.forwardRef<HTMLDivElement, AboutMeProps>(
  ({ about_me, draggableProps, dragHandleProps }, ref) => {
    return (
      <SectionContainer
        title={about_me.header}
        ref={ref}
        draggableProps={draggableProps}
        dragHandleProps={dragHandleProps}
      >
        <p>{about_me.description}</p>
      </SectionContainer>
    );
  }
);

export default AboutMe;
