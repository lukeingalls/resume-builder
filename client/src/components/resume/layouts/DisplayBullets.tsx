import { getNonce } from "@utilities/utils";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { GrDrag } from "react-icons/gr";

interface DisplayBulletsProps {
  bullets: string[] | undefined;
  /**
   * required for drag and drop
   */
  type?: string;
  /**
   * required for drag and drop
   */
  idx?: number;
}

export default function DisplayBullets({
  bullets,
  type,
  idx,
}: DisplayBulletsProps) {
  if (!bullets) return null;
  const id = `BULLETS-${type ? type : getNonce()}-${idx || ""}`;
  return (
    <Droppable droppableId={id} type={id}>
      {(provided, snapshot) => {
        const draggingClasses = snapshot.isDraggingOver ? "bg-blue-100" : "";
        return (
          <ul
            className={`${draggingClasses} hover:bg-blue-50`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {bullets.map((bullet, idx) => (
              <Draggable draggableId={bullet} index={idx} key={bullet}>
                {(provided, snapshot) => {
                  return (
                    <li
                      className="list-item list-outside items-center"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <span {...provided.dragHandleProps}>
                        <GrDrag className="inline-block mr-2" />
                      </span>

                      <span>{bullet}</span>
                    </li>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        );
      }}
    </Droppable>
  );
}
