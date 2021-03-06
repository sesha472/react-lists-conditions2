import React from 'react';

import classes from './Cockpit.css';

const Cockpit=(props)=>{
   

    const assignedClasses= [];
    let btnClass="";
    if(props.showitemslist){
    btnClass=classes.Red;
    }

    if(props.personslistcockpit.length<=3){
      assignedClasses.push(classes.pink);
    } 
    if(props.personslistcockpit.length<=2){
      assignedClasses.push(classes.bold);
      } 
    if(props.personslistcockpit.length<= 1){
      assignedClasses.push(classes.blue);
    }
  

    return(<div className={classes.Cockpit}>
          <h1>{props.title} </h1>
      <h2 >thi is h2</h2>
      <p className={assignedClasses.join(' ')}>this is paragraph</p>
      {/* <h2 className={classes.join(' ')}>thi is h2</h2> */}
      <div className={classes.dev}>
      <button className={btnClass}  onClick={props.togleclicked}>show items</button>
   <br /> 
   <br />
      <button className={btnClass}   onClick={props.switchnamecokpit}>switch names</button>
      </div>
    </div>);

}

export default Cockpit;