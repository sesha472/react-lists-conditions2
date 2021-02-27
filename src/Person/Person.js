
import React from 'react';
import './person.css';

const Person=(props)=>{

    return (
         <div className="Person">
        <h1 onClick={props.click1}>name ={props.name}, and click ={props.age}  </h1>
        <h2>{props.children}</h2>
        <input type='text'  onChange={props.changed} />
    </div>);
};

export default Person;