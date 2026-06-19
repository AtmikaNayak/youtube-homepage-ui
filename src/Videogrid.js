import React from 'react'
import './App.css'

import Videocards from './Videocards';
import t1 from './assets/t1.jpg';
import t2 from './assets/t2.jpeg';
import t3 from './assets/t3.jpeg';
import t4 from './assets/t4.jpeg';
import t5 from './assets/t5.jpeg';
import t6 from './assets/t6.jpeg';
import t7 from './assets/t7.jpeg';
import t8 from './assets/t8.jpeg';

function Videogrid(props) {
    const arr = [
        {
        image : t1,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Lo-fi",
        },
        {
        image : t2,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "NEET",
        },
        {
        image : t3,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Storytelling",
        },
        {
        image : t4,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Cricket",
        },
        {
        image : t5,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Mantras",
        },
        {
        image : t6,
        title : "A 7ozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Live",
        },
        {
        image : t7,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Music",
        },
        {
        image : t8,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "T-Series",
        },
        {
        image : t1,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Movie musicals",
        },
        {
        image : t2,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Bhavya Gandhi",
        },
        {
        image : t3,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Jukebox",
        },
        {
        image : t4,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Patlu",
        },
        {
        image : t5,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Arijit Singh",
        },
        {
        image : t6,
        title : "A 7ozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Gaming",
        },
        {
        image : t7,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Romantic Music",
        },
        {
        image : t8,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Live",
        },
        {
        image : t1,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Indian pop music",
        },
        {
        image : t2,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Soul Music",
        },
        {
        image : t3,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Telenovelas",
        },
        {
        image : t4,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Recently uploaded",
        },
        {
        image : t5,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "New to you",
        },
        {
        image : t6,
        title : "A 7ozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Arijit Singh",
        },
        {
        image : t7,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Telenovelas",
        },
        {
        image : t8,
        title : "A cozy home setup featuring streaming services on smart TV, tablet, and smartphone.",
        channel : "Jakub Zerdzicki",
        views : "14k Views. 8 Months Ago",
        category : "Music",
        }
    ];
    const fileteredVideos = props.category === "All" ? arr : arr.filter((item) => item.category === props.category);
    return (
        <div className='video-grid'>
            {
            fileteredVideos.map((item,index) => 
            <Videocards key={index}
                image={item.image}
                title={item.title}
                channel={item.channel}
                views={item.views}
            />
            )
        }
        </div>
    )
}

export default Videogrid