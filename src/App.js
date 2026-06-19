import React from 'react'
import './App.css';
import {useState} from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Categories from './Categories'
import Videogrid from './Videogrid'

function App() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Navbar />
      <Categories 
      category = {category}
      setCategory={setCategory}
      />
      <div className='main'>
      <Sidebar />
      <Videogrid 
      category={category}
      />
      </div>
    </div>
  )
}

export default App