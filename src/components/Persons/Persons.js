import React,{Component} from 'react';

import Person from './Person/Person.js';

class Persons extends Component {

    // static getDerivedStateFromProps(props,state){
    //     console.log("persons.js getderived state");
    //     return state;
    //   }

      shouldComponentUpdate(nextprops,nextstate){
          console.log("persons.js shouldcomponetupdate")
          return true;
      }

      getSnapshotBeforeUpdate(prevprops,prevstate){
          console.log("persons.js getsnapShotbeforeupdate");
          return {msg:"snapchat"}
      }

      componentDidUpdate(prevprops,prevstate,snap){
          console.log("persons.js componetdidupdate");
          console.log(snap);
      }
      componentWillUnmount(){
          console.log("ps.js componetwillunmount")
      }


render(){
    console.log("persons.js render ");

return this.props.personslist.map((item,index) => {
        return <Person 
         click1={() =>this.props.deletself(index)}
        name={item.name} 
        age={item.age}  
        key={item.id}
        changed={(event)=>this.props.changeevent(event, item.id)}
       /> ;
    });
};
}
 
export default Persons;