import Resume from "./resume/Resume";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { useAppDispatch } from "@store/hooks";
import { rearrangeBullets, rearrangeSection } from "@store/actions/resume";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (result.type === "RESUME_SECTION") {
      if (result.destination)
        dispatch(
          rearrangeSection({
            startIdx: result.source.index,
            endIdx: result.destination.index,
          })
        );
      return;
    }
    if (result.type.includes("BULLET")) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let [_, type, idx] = result.type.split("-");
      if (!idx) idx = "0";
      if (!result.destination) return;
      dispatch(
        rearrangeBullets({
          type,
          idx: parseInt(idx),
          startIdx: result.source.index,
          endIdx: result.destination.index,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BrowserRouter>
        <Switch>
          <Resume />
        </Switch>
      </BrowserRouter>
    </DragDropContext>
  );
}

export default App;
