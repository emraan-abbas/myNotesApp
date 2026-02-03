import { useState, useEffect } from "react";
import NotesForm from "./components/NotesForm";
import NoteList from "./components/NoteList";

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  const [searchText, setSearchText] = useState('')
  const filteredNotes = notes.filter(
    note =>
      note &&
      note.title &&
      note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const addNote = (noteData) => {
    const updatedNotes = [...notes, noteData]
    setNotes(updatedNotes)
  }

  const deleteNote = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this note?");

    if (!isConfirmed) {
      return;
    }

    setNotes(prev => prev.filter(note => note && note.id !== id));
  };


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
    <div className="container">
        <div className="container mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search notes by title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
    </div>
      <NotesForm addNote={addNote} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} updateNote={updateNote} />
    </>
  );
}

export default App;
