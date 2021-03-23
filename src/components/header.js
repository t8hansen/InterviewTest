import React from 'react';
import {Link} from "react-router-dom";

import {information} from './const/preset.js'

export const Header = () => {
    const logoImage = information.site.logoImage
    return (
        <div
            className="container" 
            style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '100%', backgroundColor: '#ededed', font:'sans-serif'}}
        >
            <Link to={'/'}>
                <img src={logoImage} height={50} width={50} />
            </Link>
            <center>
                <h1>
                    Earthquake Zen Garden
                </h1>
            </center>
            <div style={{textAlign:'right'}}>
                <Link to={'/user'}>
                    Welcome Sally
                </Link>
            </div>
        </div>
    )
}

export default Header;