import React from 'react'
import './App.css'

import menu from './assets/menu.png'
import youtube from './assets/youtube.png'
import search from './assets/search.png'
import mic from './assets/mic.png'
import create from './assets/create.png'
import notify from './assets/notify.png'
import profile from './assets/profile.jpeg'


function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <img src={menu} className="icon"></img>
            <img src={youtube} className="logo"></img>
        </div>
        <div className="nav-center">
            <input type='text' placeholder="Search"></input>
            <button className="search">
                <img src={search} className="icon"></img>
            </button>
            <button className="mic">
                <img src={mic} className="icon"></img>
            </button>
        </div>
        <div className="nav-right">
            <button className="create-btn">
                <img src={create} className="icon"></img>Create
            </button>
            <button className="notify">
                <img src={notify} className="icon"></img>
            </button>
            <img src={profile} className="profile"></img>
        </div>
    </nav>
  )
}

export default Navbar