import React from 'react';
import {
    useParams
} from "react-router-dom";

import {information} from './const/preset.js'
import {timeConverter} from './const/const.js'

export const Details = () => {
    let { id } = useParams();
    
    const index = information.data.features.findIndex(x => x.id === id);
    if (index === -1) {
        return (
            <div>
                <center>
                    <h2>
                        Cannot find earthquake
                    </h2>
                </center>
            </div>
        )
    }

    const earthquakeDetails = information.data.features[index]
    return (
        <div>
            <center>
                <h2>
                    {earthquakeDetails.properties.place}
                </h2>
                 <div
                    id = 'details'
                    className="container" 
                    style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width: '50%'}}
                >
                    <b>Title</b>
                    <div>{earthquakeDetails.properties.place}</div>
                    <b>Magnitude</b>
                    <div>{earthquakeDetails.properties.mag}</div>
                    <b>Time</b>
                    <div>{timeConverter(earthquakeDetails.properties.time)}</div>
                    <b>Status</b>
                    <div>{earthquakeDetails.properties.status}</div>
                    <b>Tsunami</b>
                    <div>{earthquakeDetails.properties.tsunami}</div>
                    <b>Type</b>
                    <div>{earthquakeDetails.properties.type}</div>
                </div>
            </center>
        </div>
    )
}

export default Details;