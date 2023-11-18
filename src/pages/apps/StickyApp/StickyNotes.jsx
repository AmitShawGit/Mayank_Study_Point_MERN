import React from 'react'
import { useState } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StickyNotes = () => {
    let [showModal, setShowModal] = useState(false)

    let [note, setNote] = useState({ title: "", description: "" });

    let [addNote, setAddNote] = useState([])


    let handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prev) => ({ ...prev, [name]: value }));
    };

    let handleSubmit = (e) => {
        e.preventDefault();

        if (note.id) {
            setAddNote((prevNoteObject) => prevNoteObject.map((newArrofNotes) => newArrofNotes.id === note.id ? { ...note } : newArrofNotes))
        } else {
            setAddNote((prevNotes) => [
                ...prevNotes,
                { id: addNote.length + 1, title: note.title, description: note.description }
            ]);
        }
        setNote([]);
        setShowModal(false);
    };

    const deleteItem = (id) => {
        setAddNote((prevNotes) =>
            prevNotes.filter((note) => note.id !== id)
        );
    };
    const editNote = (id) => {
        const noteToEdit = addNote.find((note) => note.id === id);

        if (noteToEdit) {
            setShowModal(true);

            const updatedNotes = addNote.map((note) =>
                note.id === id
                    ? {
                        ...note,
                        title: noteToEdit.title,
                        description: noteToEdit.description,
                    }
                    : note
            );

            setAddNote(updatedNotes);

            setNote({
                id: noteToEdit.id,
                title: noteToEdit.title,
                description: noteToEdit.description,
            });
        }
    };



    return (

        <>
            <Container>
                <p className="heading">Sticky Notes App</p>
                <div className="row align-items-center justify-content-center notes-container mt-5" style={{ display: showModal ? "block" : "none" }}>
                    <div className="notepad-modal">
                        <form action="" onSubmit={handleSubmit}>
                            <label htmlFor="" className='text-white mb-1'>Title</label>
                            <input type="text" name='title' className='form-control mb-2' value={note.title || " "} onChange={handleChange} placeholder='Heading' />
                            <label htmlFor="" className='text-white mb-1'>Description</label>
                            <textarea cols="30" rows="2" name="description" className='form-control mb-3' value={note.description || " "} onChange={handleChange} ></textarea>
                            <button className='btn btn-primary'>Save</button>
                        </form>
                    </div>
                </div>
                <Row className='mt-5'>
                    <Col md={3} onClick={() => setShowModal(!showModal)} className='mt-2'>
                        <div className="add-notes">
                            <div className="icon-bg">
                                <i className="ri-add-line add-note-plus"></i>
                            </div>
                        </div>
                    </Col>
                    {addNote.map((item, key) => {

                        return (<Col md={3} key={key} className='mt-2'>
                            <div className="view-notes">
                                <div className="notes-description">

                                    <h4 className='text-primary notes-title'><b>{item.title}</b></h4>
                                    <p>{item.description}</p>
                                    <div className="d-flex justify-content-between footer-section">
                                        <div className='date-section'>

                                            <p>{new Date().toLocaleDateString()}</p>
                                        </div>
                                        <div className="action">
                                            <i className="ri-pencil-fill pointer" onClick={() => editNote(item.id)}></i> <i className="ri-delete-bin-fill m-3 pointer" onClick={() => deleteItem(item.id)}></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>)
                    })}
                </Row>
            </Container>




        </>
    )
}

export default StickyNotes
