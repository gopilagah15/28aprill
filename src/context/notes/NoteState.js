import React, { useState } from 'react'
import noteContext from "./noteContext";
 
const NoteState = (props) => {
    const host='http://localhost:5000'
    const notesInitial = [];
      const [notes, setnotes] = useState(notesInitial);

      //add a note
      const getAllNotes=async()=>{

         //api call
         const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",  
          headers: {
            "Content-Type": "application/json", 
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZjdmNmIxMjZjMDBmMGE3OWM4ZDRkIn0sImlhdCI6MTcxNDM4ODg1NH0.dRtP7DmcYUQC_XhxVpNiweIn2dvxsurd8BVN2mZiihQ"
          }
        });
        const json =  await response.json();  
        console.log(json);  
        setnotes(json);
      }
    
      //add a note
      const addNote=async(title,description,tag)=>{

         //api call
         const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",  
          headers: {
            "Content-Type": "application/json", 
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZjdmNmIxMjZjMDBmMGE3OWM4ZDRkIn0sImlhdCI6MTcxNDM4ODg1NH0.dRtP7DmcYUQC_XhxVpNiweIn2dvxsurd8BVN2mZiihQ"
          }, 
          body: JSON.stringify({title,description,tag}),  
        });
        const json =  response.json();  
        console.log(json);
        console.log('adding a note');
        const note= {
            "_id": "662f9025126c00f0a79c8d55",
            "user": "662f7f6b126c00f0a79c8d4d",
            "title": "lets learn ",
            "description": "Python",
            "tag": "general",
            "date": "2024-04-29T12:18:45.628Z",
            "__v": 0
          }
          setnotes(notes.concat(note))

          
      }

      //delete a note
      const deleteNote =(id)=>{
        console.log('deleting the note' +id);
        const newNotes = notes.filter((note)=> { return note._id!==id});
        setnotes(newNotes);
      }

      //edit a note
      const editNote = async(id,title,description,tag)=>{
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/662e4b6ecac17c984567bff0${id}`, {
            method: "PUT",  
            headers: {
              "Content-Type": "application/json", 
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZjdmNmIxMjZjMDBmMGE3OWM4ZDRkIn0sImlhdCI6MTcxNDM4ODg1NH0.dRtP7DmcYUQC_XhxVpNiweIn2dvxsurd8BVN2mZiihQ"
            }, 
            body: JSON.stringify({title,description,tag}),  
          });
          const json =  response.json();  
          console.log(json);
        

        //logic to edit in client
        for(let index = 0; index < notes.length; index++){
            const element = notes[index];
            if(element._id===id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
      }
  return (
   <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getAllNotes}}>
    {props.children}
   </noteContext.Provider>
  )
}

export default NoteState
