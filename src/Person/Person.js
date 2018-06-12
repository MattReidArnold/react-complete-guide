import React from 'react'

import './Person.css';

const person = (props) => {
    return (
        <div class="Person">
            <p onClick={() => props.click(props.name)}>I'm {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;