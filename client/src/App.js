import {useState, useEffect} from 'react';

import NoteForm from './components/NoteForm'
import ListNotes from "./components/ListNotes";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

    const [notes, setNotes] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const result = await fetch(`/api/notes/list`, {method: 'POST'})
            .catch(error => {
                throw new Error(error);
            });

        const json = await result.json();
        setNotes(json);
    };

    const handleModal = () => {
        setModal(prev => !prev);
    };

    return(
        <div className="container">
            <div className="notes-wrapper">
                <div className="notes-title">
                    <h1>Notes</h1>
                </div>
                <div className="notes-control">
                    <button className={'btn btn-success'} onClick={handleModal}>Add Note</button>
                </div>
            </div>

            <ListNotes notes={notes} />
            <NoteForm show={modal} handleModal={handleModal}/>

        </div>
    )
};

export default App;
