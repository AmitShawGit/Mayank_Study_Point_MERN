import React from 'react'
import { useState } from 'react';

const StickyNotes = () => {
    let [note, setNote] = useState({ title: " ", description: " " });
    let handleChange = (e) => {

        setNote({ ...note, [e.target.name]: e.target.value })
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        let key = `key_${Date.now()}`;
        localStorage.setItem(key, note);
        setNote({ title: "", description: "" })
        // let data = [{ ...note, [e.target.name]: e.target.value}];
        // data.forEach((items) => { localStorage.setItem(`data ${items.id}`, JSON.stringify(items)) })

    }
    const deleteItem = (e) => {
        console.log(e.target.id);
    }
    let previewNote = localStorage.getItem( `key_${Date.now()}`)
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Heading' name='title' className='form-control' value={note.title || " "} onChange={handleChange} />

                <textarea cols="30" rows="2" name="description" className='form-control' value={note.description || " "} onChange={handleChange} ></textarea>
                <button>Save</button>
            </form>

            <p>{previewNote}<button onClick={deleteItem}>Delete</button></p>
        </div>
    )
}

export default StickyNotes
