import React,{useEffect} from 'react';

import classes from './Cockpit.css';

const Cockpit=(props)=>{
   
useEffect(()=>{
  console.log("cokcpit.js cloud useeffect");
  const timer =setTimeout(() => {
    alert("save data to cloud");
  }, 1000);
  return ()=>{
    clearTimeout(timer);
    console.log("cockpit.js: cleanup workin 1st useeffet");
  };
}, []);

useEffect(()=>{
  console.log("cockpiy.js: cloud 2nd useeffect");
  return()=>{
    console.log("cockpit.js: cleanuupwork in 2nd useeffect")
  };
});


    const assignedClasses= [];
    let btnClass="";
    if(props.showitemslist){
    btnClass=classes.Red;
    }

    if(props.personsLength<=3){
      assignedClasses.push(classes.pink);
    } 
    if(props.personsLength<=2){
      assignedClasses.push(classes.bold);
      } 
    if(props.personsLength<= 1){
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

export default React.memo(Cockpit);