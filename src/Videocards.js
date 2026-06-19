import React from 'react'
import './App.css'

function Videocards(props) {
  return (
    <div className="card">
        <img src={props.image} className='thumbnail'></img>
        <div className='card-content'>
            <h4>{props.title}</h4>
            <p>{props.channel}</p>
            <span>{props.views}</span>
        </div>
    </div>
  )
}

export default Videocards