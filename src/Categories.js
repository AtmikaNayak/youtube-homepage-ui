import React from 'react'
import './App.css'
import App from './App'

function Categories(props) {
    const arr = ["All", "Music", "Movie musicals", "Bhavya Gandhi", "T-Series", "Jukebox", "Patlu", "Arijit Singh",
        "Gaming", "Romantic Music", "Live", "Storytelling", "Indian pop music", "Lo-fi", "NEET", "Soul Music",
        "Telenovelas", "Mantras", "Cricket", "Recently uploaded", "New to you"];
    return (
        <div className="categories">
            {
                arr.map((item) =>
                    <button key={item}
                    onClick = {() => props.setCategory(item)}
                    style={{
                        backgroundColor:
                        props.category === item ? "black" : "#e4e4e4",
                        color:
                        props.category === item ? "white" : "black",
                    }}
                    >{item}</button>
                )
            }
        </div>

    )
}
    export default Categories;