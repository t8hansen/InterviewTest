import React from 'react';
import {Link} from "react-router-dom";

import {information} from './const/preset.js'
import {timeConverter} from './const/const.js'


export const Homepage = () => {
    const allEarthQuakesData = information.data

    const title = allEarthQuakesData.metadata.title

    const earthquakeGrid = allEarthQuakesData.features.map((earthquake) => {
        return(
        <div
            key = {earthquake.id}
            className="container" 
            style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '60%'}}
        >
            <Link to={`/details/${earthquake.id}`}>
                {earthquake.properties.place}
            </Link>
            <div>
                {earthquake.properties.mag}
            </div>
            <div>
                {timeConverter(earthquake.properties.time)}
            </div>
        </div>)
    })

    return(
        <div>
            <center>
                <h2>
                 {title}
                </h2>
                 <div
                    id = 'titles'
                    className="container" 
                    style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '60%'}}
                >
                    <h3>
                        Place
                    </h3>
                    <h3>
                        Magnitude
                    </h3>
                    <h3>
                        Time
                    </h3>
                </div>
                 {earthquakeGrid}
            </center>         
        </div>
    )
}


export default Homepage;