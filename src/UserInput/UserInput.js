import React from 'react';

import './UserInput.css';

const UserInput = ( props ) => {
    return (
        <div>
            <p className="UserInput"> 
                Change your username:
                <input type="text" onChange={props.changed} value={props.userName}/>
            </p>
        </div>
    )
};

export default UserInput;