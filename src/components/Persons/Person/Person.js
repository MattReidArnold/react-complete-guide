import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()');
  }
  
  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()');
  }

  render (){
    console.log('[Person.js] Inside render()');
    return (
      <Aux>
        <p onClick={() => this.props.click(this.props.name)}>
          I'm {this.props.name} and i am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}


export default withClass(Person, classes.Person);
