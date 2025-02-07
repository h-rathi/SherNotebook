import React from 'react'
import Notes from './Notes'
import AddNotes from './AddNotes'
function Home(props) {

  return (
    <div className='container'>
    
    <Notes alt1={props.alt1} />
    </div>
  )
}

export default Home
