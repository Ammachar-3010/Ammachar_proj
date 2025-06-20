import React, { useState, useEffect } from 'react';
import API from '../api';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const fetchNotes = async () => {
    const res = await API.get('/notes');
    setNotes(res.data);
  };

  const addNote = async () => {
    await API.post('/notes', { content: noteText });
    setNoteText('');
    fetchNotes();
  };

  const updateNote = async (id, newText) => {
    await API.put(`/notes/${id}`, { content: newText });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Your Notes</h2>
      <input value={noteText} onChange={e => setNoteText(e.target.value)} placeholder="Write note" />
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <input
              defaultValue={note.content}
              onBlur={(e) => updateNote(note._id, e.target.value)}
            />
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
