import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes,getAllNotes} = context;
    useEffect(()=>{
      getAllNotes()
    },[])
  return (
    <div>
      <div className="container">
    <h5>Your Notes</h5>
    {notes.map((note)=>{
        return <Noteitem key={note.id} note={note}/>
    })}
</div>
    </div>
  )
}

export default Notes
