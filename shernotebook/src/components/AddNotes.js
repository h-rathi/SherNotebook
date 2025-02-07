import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
// import Alert from './Alert';

const AddNotes = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note,setNote]=useState({title:"",description:"",tag:"general"})
    
    const handleclick=(e)=>{
        e.preventDefault();
        // if (!note.title || !note.description) {
          
        //   Alert("Title and Description cannot be empty!");  // Alert if fields are empty
        //   return;
        // }
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        props.alt1("Note added successfully","success")
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    
    <div>
      <div className='my-3'>
      <h2>add a note</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" >title</label>
          <input type="text" className="form-control" value={note.title} id="title" name="title" onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" >Description</label>
          <input type="text" className="form-control" value={note.description} id="description" onChange={onChange} name="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label" >Tag</label>
          <input type="text" className="form-control" value={note.tag} id="tag" onChange={onChange} name="tag" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!note.title || !note.description}  onClick={handleclick}>Add Note</button>
      </form>
    </div>
    </div>
  )
}

export default AddNotes