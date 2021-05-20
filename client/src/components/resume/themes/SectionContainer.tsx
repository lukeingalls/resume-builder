import React from "react";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";

// https://stackoverflow.com/a/65332819/14034323
interface SectionContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
  title?: string;
}

export default React.forwardRef<HTMLDivElement, SectionContainerProps>(
  (
    { children, draggableProps, dragHandleProps, title }: SectionContainerProps,
    ref
  ) => {
    return (
      <div className="my-5" ref={ref} {...draggableProps} {...dragHandleProps}>
        {title && (
          <>
            <h3 className="text-lg font-bold">{title}</h3>
            <hr className="mb-3" />
          </>
        )}
        {children}
      </div>
    );
  }
);
