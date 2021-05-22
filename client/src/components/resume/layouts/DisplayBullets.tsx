import { getNonce } from "@utilities/utils";
import { Draggable, Droppable } from "react-beautiful-dnd";

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
                      className="list-disc list-item list-outside ml-4"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {bullet}
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
