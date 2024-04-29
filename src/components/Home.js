import React from 'react'
import Notes from './Notes'
import Addnote from './Addnote'

const Home = () => {
  return (
    <>
    <div className="container">
        <h1>Add a note</h1>
    </div>
    <div className="container">
        
      <Addnote/>
<Notes/>

    </div>
    </>
  )
}

export default Home
