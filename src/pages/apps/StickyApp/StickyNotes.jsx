import React from 'react'
import { useState } from 'react';

const StickyNotes = () => {
    let [note, setNote] = useState({ title: " " });
    let handleChange = (e) => {

        setNote({ ...note, [e.target.name]: e.target.value })
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(note);
        localStorage.setItem("title", note.title)
    } 
    let previewNote = localStorage.getItem("title")
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Heading' name='title' value={note.title} onChange={handleChange} />
                <button>Save</button>
            </form>

            <p>{previewNote}</p>
        </div>
    )
}

export default StickyNotes
