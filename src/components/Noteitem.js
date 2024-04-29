import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const context = useContext(noteContext); 
    const {deleteNote} = context;
    const {note} = props
  return (
    <div>
       <div className="card"  > 
         <div className="card-body">
            <div className="d-flex align-items-center" >
        <h5 className="card-title">{note.title}</h5>
        <i class="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id)}}></i>
        <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <p className="card-text">{note.description}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Noteitem
