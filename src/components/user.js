import React from 'react';

import {information} from './const/preset.js'

export const UserProfile = () => {
    const userInfo = information.profile

    return (
        <div>
            <center>
                <h2>
                    Profile
                </h2>
                <div
                    id = 'profile'
                    className="container" 
                    style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', width: '50%'}}
                >
                    <div>
                        <img src={userInfo.avatarImage} height={150} width={150} />
                    </div>
                    <div
                        id = 'profile'
                        className="container" 
                        style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}
                    >
                        <b>First Name</b>
                        <div>{userInfo.firstName}</div>
                        <b>Last Name</b>
                        <div>{userInfo.lastName}</div>
                        <b>Phone</b>
                        <div>{userInfo.phone}</div>
                        <b>Email</b>
                        <div>{userInfo.email}</div>
                        <b>Bio</b>
                        <div>{userInfo.bio}</div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default UserProfile;