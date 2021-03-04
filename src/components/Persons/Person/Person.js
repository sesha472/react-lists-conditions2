
import React from 'react';
import one from './Person.css';

const Person=(props)=>{

    return (
         <div className={one.Person}>
        <h1 onClick={props.click1}> name={props.name} and age={props.age}  </h1>
        <h2>{props.children}</h2>
        <input type='text'  onChange={props.changed} />
    </div>);
};

export default Person;