import React from 'react';
import NoteItem from './NoteItem';

const ListNotes = ({notes}) => {

    if(!notes.length){
        return(<div className="emptyNotes">LIST IS EMPTY</div>);
    }

    return(
        <div className="card-deck">
            {notes.map((note, index) => (
                <NoteItem key={index} item={note} />
            ))}
        </div>
    );
};


export default ListNotes;
