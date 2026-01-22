import React from 'react'

export default function NoteCard({note, deleteNote}) {
  return (
		<div className='card w-50'>
			<div className='card-body'>
				<h5 className='card-title'>{note.title}</h5>
				<p className='card-text'>{note.description}</p>
				<a className='btn btn-danger' onClick={() => deleteNote(note.id)}>
					Delete
				</a>
			</div>
		</div>
	);
}
