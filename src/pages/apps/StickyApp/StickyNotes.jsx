import React from 'react'
import { useState } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StickyNotes = () => {
    let [note, setNote] = useState({ title: " ", description: " " });
    let [showModal, setShowModal] = useState(false)
    let handleChange = (e) => {

        setNote({ ...note, [e.target.name]: e.target.value })
    };
    let key = 1;
    let handleSubmit = (e) => {
        e.preventDefault();
        let key = ((prev) => prev.key++);
        localStorage.setItem(key, JSON.stringify(note));
        setNote({ title: "", description: "" });
        setShowModal(false);
    }
    const deleteItem = (e) => {
        console.log(e.target.id);
    }

    return (

        <>
            <Container>
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
                                <i class="ri-add-line add-note-plus"></i>
                            </div>
                        </div>
                    </Col>
                    {Object.keys(localStorage).map((item, key) => {
                        const storedNote = localStorage.getItem(item);
                        console.log(storedNote.title);
                        return (<Col md={3} key={key} className='mt-2'>
                            <div className="view-notes">
                                <div className="notes-description">

                                    <h4 className='text-primary notes-title'><b>{item.title}</b></h4>
                                    <p>{item.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className='date-section'>

                                            <p>29 Feb,2023</p>
                                        </div>
                                        <div className="action">
                                            <i class="ri-pencil-fill pointer"></i> <i class="ri-delete-bin-fill m-3 pointer"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>)
                    })}
                </Row>
            </Container>
            {/* notepadmodal */}



        </>
    )
}

export default StickyNotes
