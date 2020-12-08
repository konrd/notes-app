import {React, useState} from 'react';
import {Modal, Button, Form} from "react-bootstrap";

const NoteForm = ({show, handleModal}) => {

    const [form, setForm] = useState({
        title: '',
        text: '',
    });

    const [image, setImage] = useState();

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const changeFileHandler = event => {
        setImage(event.target.files[0]);
    };

    const addNoteHandler = () => {

        const data = {...form, image: image};

        fetch("/api/notes/add",
            {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify( data )
                }
            )
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setForm({title: '', text: ''});
                },
            )
    };

    return(
        <>
            <Modal show={show} animation={false}>
                <Modal.Header>
                    <Modal.Title>Add new note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" onChange={changeHandler} placeholder="Title for note" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Text</Form.Label>
                            <Form.Control as="textarea" name="text" onChange={changeHandler} rows={3} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" name="image" onChange={changeFileHandler} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModal()}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={addNoteHandler}>
                        Add Note
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default NoteForm;
