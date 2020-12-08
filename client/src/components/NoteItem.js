import React from "react";

const NoteItem = ({item}) => {

    return(
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src="/images/no-image.png"  alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <div className="float-left">
                        <small>29.05.2020 16:33:00</small>
                    </div>
                    <button className="btn btn-danger btn-sm float-right">Remove</button>
                </div>
            </div>
        </div>
    )
};

export default NoteItem;
