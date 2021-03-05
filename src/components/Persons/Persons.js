import React from 'react';

import Person from './Person/Person.js';

const Persons=(props)=> props.personslist.map((item,index) => {

        return <Person 
         click1={()=>props.deletself(index)}
        name={item.name} 
        age={item.age}  
        key={item.id}
        changed={(event)=>props.changeevent(event, item.id)}
       /> ;
    });
 
export default Persons;