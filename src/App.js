import { useState, useEffect } from "react";
import NotesForm from "./components/NotesForm";
import NoteList from "./components/NoteList";

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  const addNote = (noteData) => {
    const updatedNotes = [...notes, noteData]
    setNotes(updatedNotes)
  }

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  const updateNote = (id, updatedNote) => {
    setNotes(prev => 
      prev.map(note =>
        note.id === id ? {...note, ...updatedNote} : note
      )
    )
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <NotesForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </>
  );
}

export default App;
