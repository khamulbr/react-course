import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {
    return (
        <p className="CharComponent" onClick={props.clicked}>
            {props.char}
        </p>
    );
};

export default charComponent;