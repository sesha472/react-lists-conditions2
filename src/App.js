import React, { Component } from 'react';

import './App.css';


//=> 50)user input and out manupulating
// import Userinput from './userinput/userinput.js';
// import Useroutput from './useroutput/useroutput.js';
// class App extends React.Component{
//   state={
//     userName:"SESHAA"
//   };

//   changehandler=(e)=>{
//     this.setState({
//    userName: e.target.value
//     });
//   };

//   render(){
//     return (
//       <div>
//       <Userinput chnage={this.changehandler} curentname={this.state.userName} />
//      <Useroutput name={this.state.userName} />
//      <Useroutput name={this.state.userName} />
//     <Useroutput name="seshasai" />
     
//       </div>
//     );
//   }
// }
// export default App;

// =>this componet is useate.js componet
// import Uses from './usestate/usestate.js';
// class App extends React.Component{
// render(){
//   return (
//     <Uses/>
//   );
// };
// }
// export default App;



// => 45)the bellow code is for persons using class
import Person from './Person/Person.js';
class App extends Component {
  state = {
    persons:[
      { id: "1",name:"sai1", age:21},
      {id: "2",name:"sai2", age:22},
      {id: "3",name:"sai3", age:23},
      {id: "4",name:"sai4", age:24}
    
    ],
    otherstate:"state prop1",
    showitems:false
  }

  switchNameHandler=(newname)=>{
    this.setState({persons:[
      {name:newname,age:25},
      {name:"saiB",age:26},
      {name:"saiC",age:28},
      {name:"saiD",age:27}
    ],
    otherstate:"state prop2"
    
  })
  };

  deletobj=(index)=>{
    const  persons=this.state.persons;
    persons.splice(index,1);
    this.setState({persons : persons})
  }

  newNamechange = (event,id) => {
    const personindex= this.state.persons.findIndex(p=>{
      return p.id===id;
    })
 
    const person = {
      ...this.state.persons[personindex]
    }

    // or
    // const person=Object.assign({},this.state.persons[personindex]);
   person.name=event.target.value;
   const persons=[...this.state.persons];
   persons[personindex]=person;

    this.setState({persons:persons });
  };

  togglehandler=()=>{
    this.setState({ showitems:!this.state.showitems})
  };

  

  render() {
    const bstyle={
      backgroundColor:"hotpink",
      padding:"20px",
      outline:"blue",
     
    }

    let person = <h1>clith the button to show items</h1>;
    if((this.state.showitems)){
      person = (<div>
       { (this.state.persons).map((person,index) =>{
            return <Person  click1={()=>this.deletobj(index)}
            name={person.name} 
            age={person.age}  
            key={person.id}
            changed={(event)=>this.newNamechange(event, person.id)}
           /> ;
        }) }
         {this.state.otherstate}
            </div>);
    }
  

    return (
      <div className="App">
      <h1>welcome to this cource </h1>
      <h2>thi is h2</h2>
      <button style={bstyle} onClick={this.togglehandler}>show items</button>
   <br /> 
   <br />
      <button style={bstyle} onClick={()=>this.switchNameHandler("saib")}>switch names</button>

     {/* if the person  is not null showing the dats in if confition sttatement */}
     {person}  
     
      </div>
    );

   
  }
}
export default App;

 // if we dont use jsx the syntax will will be look like this wit out jsx
  // return React.createElement('div' ,{className:'App'}, React.createElement('h1',{className:"one"},"namsthey react") ,React.createElement('h3',null,'good morning'),React.createElement('h4',null,'good morning'));
   