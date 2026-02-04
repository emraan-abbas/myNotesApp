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


  const [sortType, setSortType] = useState('newest')
  const sortedNotes = filteredNotes.sort((a, b) => {
    if (sortType === 'newest') return b.id - a.id;
    if (sortType === 'oldest') return a.id - b.id;
    if (sortType === 'aplha') return a.title.localCompare(b.title);
  })

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
    <select value={sortType} onChange={e => setSortType(e.target.value)}>
      <option value='newest'>Newest First</option>
      <option value='oldest'>Oldest First</option>
      <option value='alpha'>Alphabatical Order</option>
    </select>

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
      <NoteList notes={sortedNotes} deleteNote={deleteNote} updateNote={updateNote} />
    </>
  );
}

export default App;
