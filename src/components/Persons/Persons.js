import React from 'react';

import Person from './Person/Person.js';

const Persons=(props)=> props.persons.map((item,index) => {

        return <Person 
         click1={()=>props.clickedelet(index)}
        name={item.name} 
        age={item.age}  
        key={item.id}
        changed={(event)=>props.changeevent(event, item.id)}
       /> ;
    });
 
export default Persons;