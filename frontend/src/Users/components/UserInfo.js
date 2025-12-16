import React from "react";

import './UserInfo.css';

const UserInfo = ({user}) => {

    return(
        <div className="user-info-container">
            <img src={user.image} alt='profile picture' />
            <h2>{user.username}</h2>
        </div>
    )
}

export default UserInfo;