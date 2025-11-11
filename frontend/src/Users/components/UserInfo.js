import React from "react";

const UserInfo = ({user}) => {

    return(
        <div className="user-info">
            <img src={user.image} alt='profile picture' />
            <h2>{user.name}</h2>
        </div>
    )
}

export default UserInfo;