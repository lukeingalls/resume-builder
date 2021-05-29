import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Draggable, Droppable } from "react-beautiful-dnd";
import SectionSelector from "@resume-sections/Selector";
import { changeName, changeTitle } from "@store/actions/resume";

export default function Resume() {
  const resume = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();
  const printUrl = (url: URL) => {
    return `${url.hostname}${url.pathname}`;
  };

  const education = useAppSelector((state) => state.education);

  // const sections = resume.sections.filter((section) => isValidSection(section));

  return (
    <div className="container mx-auto p-8">
      <input
        className="text-3xl font-bold w-full"
        placeholder="Firstname Lastname"
        value={resume.user.name}
        onChange={(e) => dispatch(changeName({ name: e.target.value }))}
      />
      <input
        className="text-2xl w-full"
        placeholder="Current Title"
        value={resume.user.current_title}
        onChange={(e) => dispatch(changeTitle({ title: e.target.value }))}
      />
      {/* Cannot use grid layout with react-beautiful-dnd */}
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
            <Draggable
              draggableId={education.type}
              index={7}
              key={education.header}
            >
              {(provided, snapshot) => (
                <SectionSelector
                  section={education}
                  draggableProps={provided.draggableProps}
                  dragHandleProps={provided.dragHandleProps}
                  ref={provided.innerRef}
                />
              )}
            </Draggable>{" "}
            {resume.sectionsOrder.map((sectionKey, idx) => {
              const section = resume.sections[sectionKey];
              if (!section) return null;
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
