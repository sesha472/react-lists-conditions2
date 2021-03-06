
import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component{

render(){


console.log("person render");

        return (
         <div className={classes.Person}>
        <h1 onClick={this.props.click1}> name={this.props.name} and age={this.props.age}  </h1>
        <h2>{this.props.children}</h2>
        <input type='text'  onChange={this.props.changed} />
    </div>);
};
};

export default Person;