import React, { useState } from 'react'
import NoteContext from './noteContext';

const NoteState=(props)=>{
  const initialNotes=[]
  const host = "http://localhost:5000";
    const getNotes=async ()=>{
      try {
        const response = await fetch(host+"/api/notes/fetchallnotes",{
          method:"GET",
          headers:{
            'content-type':'application/json',
            'auth-token':localStorage.getItem('token')
          }
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json=await response.json();
        setNotes(json)
       
      } catch (error) {
        console.error(error.message);
      }

    }
      const [notes,setNotes]=useState(initialNotes);
      
      //add note
      const addNote=async (title,description,tag)=>{
        let content=description
        try {
          
          const response = await fetch(host+"/api/notes/addnotes",{
            method:"POST",
            headers:{
              'content-type':'application/json',
              'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({title,content,tag})
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const data = await response.json();
        console.log("Response status:", response.status);
        console.log("Response data:", data);
        // const note={
        //     "_id": "679f64a510afbf9a9037",
        //     "user": "679f5fcc10afb6f0950a9035",
        //     "title": title,
        //     "content": description,
        //     "tag": tag,
        //     "__v": 0
        //   }
        setNotes(notes.concat(data))
         
        } catch (error) {
          console.error(error.message);
        }
        
      }
      //delete note
      const deleteNote=async (props)=>{
        try {
          const response = await fetch(host+"/api/notes/deletenotes/"+props,{
            method:"DELETE",
            headers:{
              'content-type':'application/json',
              'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify()
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const data = await response.json();
        console.log("Response status:", response.status);
        console.log("Response data:", data);

        } catch (error) {
          console.error(error.message);
        }
        let newNotes=notes.filter((note)=>{return note._id!==props})
        setNotes(newNotes)
      }
      //edit note
      
  
      const editNote=async (id, title,description,tag)=>{
        let content=description
        try {
          const response = await fetch(host+"/api/notes/updatenotes/"+id,{
            method:"PUT",
            headers:{
              'content-type':'application/json',
              'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({title,content,tag})
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error(error.message);
        }
        let newNotes=JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id===id){
            newNotes[index].title=title;
            newNotes[index].content=content;
            newNotes[index].tag=tag;
            break;
          }
        }
        setNotes(newNotes);
      }
    
     return(
        <NoteContext.Provider value ={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
     )
}
export default NoteState;
