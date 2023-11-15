import React from 'react'
import { useState } from 'react';
import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    let previewNote = localStorage.getItem(`key_${Date.now()}`)
    return (

        <>
            <Container>
                <Row className='mt-5'>
                    <Col md={3}>
                        <div className="add-notes">
                            <div className="icon-bg">
                                <i class="ri-add-line add-note-plus"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="view-notes">
                            <div className="notes-description">

                                <h4 className='text-primary notes-title'><b>TItle</b></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus, nemo similique error facilis assumenda animi</p>
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
                    </Col>
                </Row>
            </Container>
            {/* notepadmodal */}
            <div className="d-flex align-items-center justify-content-center notes-container mt-5 d-none">
                <div className="notepad-modal">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="" className='text-white mb-1'>Title</label>
                        <input type="text" name='title' className='form-control mb-2' value={note.title || " "} onChange={handleChange} placeholder='Heading' />
                        <label htmlFor="" className='text-white mb-1'>Description</label>
                        <textarea cols="30" rows="2" name="description" className='form-control mb-3' value={note.description || " "} onChange={handleChange} ></textarea>
                        <button className='btn btn-primary w-100'>Save</button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default StickyNotes
