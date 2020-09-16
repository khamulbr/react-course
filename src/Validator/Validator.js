import React from 'react';

const validator = (props) => {
    return (props.length >= 5) ? 
        <p>Text long enough</p>
        : <p>Text too short</p>;
}


export default validator;