import React from 'react';
import "./button.css";

export default function Button(props) {
    return (
        <button className='main' onClick={e => props.click()}>{props.label}</button>
    )
}