import React, { useState } from 'react';


import Person from '../Person/Person.js';

const Uses = (props) =>{
    const [info,changedinfo]=useState({
      persons:[
        {name:"sai1", age:21},
        {name:"sai2", age:22},
        {name:"sai3", age:23},
        {name:"sai4", age:24}
      
      ],
      
    });
    const [extraprop,setextrapro] = useState({ten:'this is extra prop1'});
   

  

   const switchNameHandler=()=>{
        changedinfo({persons:[
        {name:"saiA",age:25},
        {name:"saiB",age:26},
        {name:"sai4",age:28},
        {name:"sai3",age:27}
      ],
     
    });
    };
    const switchNameHandler2=()=>{
      setextrapro({ten:'this is extra prop2'});
  };
  
      return (
        <div className="App">
        <h1>welcome to this cource hi</h1>
        <h2>thi is h2</h2>
        <button onClick={switchNameHandler2,switchNameHandler}>switch name</button>
        <Person name={info.persons[0].name} age={info.persons[0].age} />
        <Person name={info.persons[1].name} age={info.persons[1].age} />
        <Person name={info.persons[2].name} age={info.persons[2].age} />
        <Person name={info.persons[3].name} age={info.persons[3].age} />
             {extraprop.ten}
        </div>

      );
         
  
  }
  
  export default Uses;
  