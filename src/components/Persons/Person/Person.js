
import React from 'react';
import classes from './Person.css';

const Person=(props)=>{

    return (
         <div className={classes.Person}>
        <h1 onClick={props.click1}> name={props.name} and age={props.age}  </h1>
        <h2>{props.children}</h2>
        <input type='text'  onChange={props.changed} value={props.name}/>
    </div>);
};

export default Person;