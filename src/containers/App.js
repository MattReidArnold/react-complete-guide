import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux"
import withClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "asdf12", name: "Matt", age: 36 },
        { id: "asdf13", name: "Katharine", age: 35 },
        { id: "asdf14", name: "Chopper", age: 2 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
    };
    console.log("[App.js] Inside constructor", props);
  }

  // componentWillMount() {
  //   console.log("[App.js] Inside componentWillMount()");
  // }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside componentWillUpdate()",
  //     nextProps,
  //     nextState
  //   );
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
          "[UPDATE App.js] Inside getDerivedStateFromProps()",
          nextProps,
          prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate()");
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => { 
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      };
    });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log("[App.js] Inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
