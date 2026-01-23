import React from 'react'
import NoteCard from './NoteCard';

export default function NoteList({notes, deleteNote, updateNote}) {
	return (
		<div className='container mt-4'>
			{notes.length === 0 ? <p>No Saved Notes</p> : 'Notes'}

			{notes.map(note => (
				<NoteCard key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
			))}
		</div>
	);
}
