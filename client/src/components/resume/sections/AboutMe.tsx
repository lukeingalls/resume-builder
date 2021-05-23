import TextArea from "@components/utilities/TextArea";
import SectionContainer from "@resume-layouts/SectionContainer";
import { changeAboutMeDescription } from "@store/actions/resume";
import { useAppDispatch } from "@store/hooks";
import React from "react";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import { TAboutMeSection } from "../../../types";

interface AboutMeProps extends React.ComponentPropsWithoutRef<"div"> {
  about_me: TAboutMeSection;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

const AboutMe = React.forwardRef<HTMLDivElement, AboutMeProps>(
  ({ about_me, draggableProps, dragHandleProps }, ref) => {
    const dispatch = useAppDispatch();
    return (
      <SectionContainer
        title={about_me.header}
        ref={ref}
        draggableProps={draggableProps}
        dragHandleProps={dragHandleProps}
      >
        <TextArea
          value={about_me.description}
          onChange={(e) =>
            dispatch(changeAboutMeDescription({ description: e.target.value }))
          }
        />
      </SectionContainer>
    );
  }
);

export default AboutMe;
