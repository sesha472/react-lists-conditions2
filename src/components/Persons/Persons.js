import React from 'react';

import Person from './Person/Person.js';

const Persons=(props)=> props.persons.map((person,index) => {

        return <Person 
         click1={()=>props.clicked(index)}
        name={person.name} 
        age={person.age}  
        key={person.id}
        changed={(event)=>props.changed(event, person.id)}
       /> ;
    });
 
export default Persons;