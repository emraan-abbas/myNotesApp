import React, { useState } from 'react'

export default function NoteCard({note, deleteNote, updateNote}) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(note.title);
	const [editedDescription, setEditedDescription] = useState(note.description);

	const saveEdit = () => {
		updateNote(
			note.id, {
				title: editedTitle,
				description: editedDescription
			}
		)
		setIsEditing(false)
	};

	const cancelEdit = () => {
		setEditedTitle(note.title)
		setEditedDescription(note.description)
		setIsEditing(false)
	}

	return (
		<div className='card w-50 my-2'>
			<div className='card-body'>
				{!isEditing && (
					<>
						<h5 className='card-title'>{note.title}</h5>
						<p className='card-text'>{note.description}</p>
						<button className='btn btn-warning me-2' onClick={() => setIsEditing(true)}>
							Edit
						</button>
						<button className='btn btn-danger' onClick={() => deleteNote(note.id)}>
							Delete
						</button>
					</>
				)}

				{isEditing && (
					<>
						<input
							type='text'
							className='form-control my-2'
							value={editedTitle}
							onChange={e => setEditedTitle(e.target.value)}
						/>
						<input
							type='text'
							className='form-control my-2'
							value={editedDescription}
							onChange={e => setEditedDescription(e.target.value)}
						/>
						<button className='btn btn-primary me-2' onClick={saveEdit}>
							Update
						</button>
						<button className='btn btn-secondary me-2' onClick={cancelEdit}>
							Close Editing
						</button>
					</>
				)}
			</div>
		</div>
	);
}
