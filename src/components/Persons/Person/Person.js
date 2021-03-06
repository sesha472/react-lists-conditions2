
import React,{Component} from 'react';
// import classes from './Person.css';
import Aux from '../../../hoc/Aux1.js';
class Person extends Component{

render(){


console.log("person render");

        return( <Aux>
        <h1 key="i1" onClick={this.props.click1}>  name={this.props.name} and age={this.props.age}  </h1>
     <h2 key="i2">{this.props.children}</h2>
        <input key="i3" type='text'  onChange={this.props.changed} />
        </Aux>);
    
}
}

export default Person;