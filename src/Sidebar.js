import React from 'react'
import './App.css'

import home from './assets/home.png'
import shorts from './assets/shorts.png'
import subscription from './assets/subscription.png'
import user from './assets/user.png'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="side-item">
            <img src={home}></img>
            <p>Home</p>
        </div>
        <div className="side-item">
            <img src={shorts}></img>
            <p>Shorts</p>
        </div>
        <div className="side-item">
            <img src={subscription}></img>
            <p>Subscriptions</p>
        </div><div className="side-item">
            <img src={user}></img>
            <p>You</p>
        </div>
    </div>
  )
}

export default Sidebar