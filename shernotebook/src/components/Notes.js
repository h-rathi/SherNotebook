import React, { useContext, useEffect, useRef ,useState} from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNotes from './AddNotes';
import { useNavigate } from 'react-router-dom';

function Notes(props) {
  let navigate=useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes ,editNote} = context;
  const [note, setNote] = useState({id:"", etitle: "", econtent: "", etag: "" })
  useEffect(() => {
    if (localStorage.getItem('token')){
      getNotes();
    }else{
      navigate('/login')

    }
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,econtent:currentNote.content,etag:currentNote.tag});
    
  }

  const handleclick = (e) => {
    editNote(note.id,note.etitle,note.econtent,note.etag)
    refClose.current.click();
    props.alt1("updated note successfully","success")
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div className="container row my-3">
      <AddNotes alt1={props.alt1} />

      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label" >title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="econtent"  className="form-label" >Description</label>
                  <input type="text" className="form-control" id="econtent" value={note.econtent} onChange={onChange} name="econtent" />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label" >Tag</label>
                  <input type="text" className="form-control" id="etag" onChange={onChange} value={note.etag} name="etag" />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleclick}>Update note</button>
            </div>
          </div>
        </div>
      </div>
      <h2>your notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} updateNote={updateNote} alt1={props.alt1} note={note} />
      })}
    </div>
  )
}
export default Notes