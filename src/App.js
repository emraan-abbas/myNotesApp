import { useState } from "react";
import NotesForm from "./components/NotesForm";

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (noteData) => {
    const updatedNotes = [...notes, noteData]
    setNotes(updatedNotes)
  }

  return (
    <>
      <NotesForm addNote={addNote} />
    </>
  );
}

export default App;
