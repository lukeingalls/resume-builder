import { useAppSelector } from "@store/hooks";
import { Draggable, Droppable } from "react-beautiful-dnd";
import SectionSelector from "@resume-sections/Selector";
import { isValidSection } from "../../new_types";

export default function Resume() {
  const resume = useAppSelector((state) => state.resume);
  const printUrl = (url: URL) => {
    return `${url.hostname}${url.pathname}`;
  };

  const sections = resume.sections.filter((section) => isValidSection(section));

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{resume.user.name}</h1>
      <h2 className="text-2xl">{resume.user.current_title}</h2>
      <div className="grid grid-cols-2 grid-rows-2 my-4">
        {resume.user.contact_info.links.map((link) => {
          const { site, url } = link;
          const processed_url = new URL(url);
          return (
            <span key={site}>
              <span className="font-bold">{site}</span>{" "}
              {printUrl(processed_url)}
            </span>
          );
        })}
        <span>
          <span className="font-bold">Phone</span>{" "}
          {resume.user.contact_info.phone_number}
        </span>
      </div>
      <Droppable droppableId="resume-sections" type="RESUME_SECTION">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {sections.map((section, idx) => {
              return (
                <Draggable
                  draggableId={section.type}
                  index={idx}
                  key={section.header || idx}
                >
                  {(provided, snapshot) => (
                    <SectionSelector
                      section={section}
                      draggableProps={provided.draggableProps}
                      dragHandleProps={provided.dragHandleProps}
                      ref={provided.innerRef}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
