import Resume from "./resume/Resume";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { useAppDispatch } from "@store/hooks";
import { rearrangeSection } from "@store/actions/resume";

function App() {
  const dispatch = useAppDispatch();
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    switch (result.type) {
      case "RESUME_SECTION":
        if (result.destination)
          dispatch(
            rearrangeSection({
              startIdx: result.source.index,
              endIdx: result.destination.index,
            })
          );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Resume />
    </DragDropContext>
  );
}

export default App;
