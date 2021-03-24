import React, { useState } from 'react';
import {Link} from "react-router-dom";

import {information} from './const/preset.js'
import {timeConverter} from './const/const.js'


export const Homepage = () => {
    const allEarthQuakesData = information.data.features
    const title = information.data.metadata.title
    const [earthquakeData, setEarthquakeData] = useState(allEarthQuakesData);
    const [placeAscSort, setPlaceAscSort] = useState(false)
    const [magAscSort, setMagAscSort] = useState(false)
    const [timeAscSort, setTimeAscSort] = useState(false)

    //Sorting Functions
    const sortByPlace = () => {
        let sortedEarthquakeData
        if (!placeAscSort) {
            sortedEarthquakeData = allEarthQuakesData.sort((a,b)=> {
                if (a.properties.place < b.properties.place){
                    return -1
                } else {
                    return 1
                }
            })
        } else {
            sortedEarthquakeData = allEarthQuakesData.sort((a,b)=> {
                if (a.properties.place > b.properties.place){
                    return -1
                } else {
                    return 1
                }
            })
        }
        setPlaceAscSort(!placeAscSort)
        return sortedEarthquakeData
        
    }    
    const sortByMagnitude = () => {
        let sortedEarthquakeData
        if (!magAscSort) {
            sortedEarthquakeData = allEarthQuakesData.sort((a,b)=> {
                return a.properties.mag - b.properties.mag
            })
        } else {
            sortedEarthquakeData = allEarthQuakesData.sort((a,b)=> {
                return b.properties.mag - a.properties.mag
            })
        }
        setMagAscSort(!magAscSort)
        return sortedEarthquakeData        
    }
    const sortByTime = () => {
        let sortedEarthquakeData
        if (!timeAscSort) {
            sortedEarthquakeData = allEarthQuakesData.sort((a,b)=> {
                return a.properties.time - b.properties.time
            })
        } else {
            sortedEarthquakeData = allEarthQuakesData.sort((a,b)=> {
                return b.properties.time - a.properties.time
            })
        }
        setTimeAscSort(!timeAscSort)
        return sortedEarthquakeData        
    }
    const sortEarthQuakeData = (column) => {
        if (column === 'Place') {
            setEarthquakeData([...sortByPlace()])
        } else if (column === 'Time') {
            setEarthquakeData([...sortByTime()])
        } else if (column === 'Magnitude') {
            setEarthquakeData([...sortByMagnitude()])
        }
    }

    
    const earthquakeGrid = earthquakeData.map((earthquake) => {
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
                        <button onClick = {()=>sortEarthQuakeData('Place')}
                        style={{backgroundColor:'transparent', borderColor:'transparent'}}>
                            Place
                        </button>
                    </h3>
                    <h3>
                        <button onClick = {()=>sortEarthQuakeData('Magnitude')}
                        style={{backgroundColor:'transparent', borderColor:'transparent'}}>
                        Magnitude
                        </button>
                    </h3>
                    <h3>                        
                        <button onClick = {()=>sortEarthQuakeData('Time')}
                        style={{backgroundColor:'transparent', borderColor:'transparent'}}>
                        Time
                        </button>
                    </h3>
                </div>
                {earthquakeGrid}
            </center>         
        </div>
    )
}


export default Homepage;