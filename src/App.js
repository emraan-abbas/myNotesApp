import { useState } from "react";
import NotesForm from "./components/NotesForm";
import NoteList from "./components/NoteList";

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (noteData) => {
    const updatedNotes = [...notes, noteData]
    setNotes(updatedNotes)
  }

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  return (
    <>
      <NotesForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote}  />
    </>
  );
}

export default App;
