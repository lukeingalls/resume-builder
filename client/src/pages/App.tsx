import Resume from "./resume/Resume";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Resume />
    </DragDropContext>
  );
}

export default App;
