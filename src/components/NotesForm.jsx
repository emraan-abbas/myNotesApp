import React, { useState } from 'react'

export default function NotesForm({addNote}) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitForm = (e) => {
    e.preventDefault()
    
    addNote({
      id: Date.now(),
      title,
      description
    })

    setTitle('');
		setDescription('');
  }

	return (
		<form className='container' onSubmit={submitForm}>
			<div className='container'>
				<div className='mb-3'>
					<label className='form-label'>Note's Title</label>
					<input
						type='text'
						className='form-control'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'>Note Description</label>
					<textarea
						className='form-control'
						rows='3'
						value={description}
						onChange={e => setDescription(e.target.value)}
					></textarea>
				</div>
			</div>
			<button className='btn btn-primary'>Add Note</button>
		</form>
	);
}
