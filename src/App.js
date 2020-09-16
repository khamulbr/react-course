import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validator from './Validator/Validator';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: '1231fewd', name: 'Max', age: 28 },
      { id: 'wr14dfsa', name: 'Manu', age: 29 },
      { id: 'yk57i8jh', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    users: [
      {userName: 'khamul', permissions:'admin, dev'},
      {userName: 'alex', permissions:'admin'},
      {userName: 'foo', permissions:'bar'}
    ],
    showPersons: false,
    text : '',
    textLength: 0
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // OTHER OPTION TO DO THAT ABOVE IS
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  userHandler = (event) => {
    this.setState({
      users: [
        {userName: event.target.value, permissions:'admin, dev'},
        {userName: 'alex', permissions:'admin'},
        {userName: 'foo', permissions:'bar'}
      ]
    })
  };

  textChangeHandler = (event) => {
    const text = event.target.value;
    const textLength = event.target.value.length;
    this.setState (
      {
        text: text,
        textLength: textLength
      }
    );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  removeCharHandler = (index) => {
    const chars = [...this.state.text.split('')];
    chars.splice(index, 1);
    const updatedText = chars.join('');
    this.setState({text: updatedText});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
          })}
        </div> 
      );
    }

    let chars = null;

    if (this.state.text) {
      chars = (
        <div>
        {this.state.text.split('').map((char, index) => {
          return <CharComponent 
          char={char}
          key={index}
          clicked={() => this.removeCharHandler(index)}
          />
        })}
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        <UserInput 
          userName={this.state.users[0].userName}
          changed={this.userHandler}
          />
        <UserOutput
          userName={this.state.users[0].userName}
          permissions={this.state.users[0].permissions}
          />
        <UserOutput
          userName={this.state.users[1].userName}
          permissions={this.state.users[1].permissions}
          />        
        <UserOutput
          userName={this.state.users[2].userName}
          permissions={this.state.users[2].permissions}
          />
        Type your text here: <input type="text" value={this.state.text} onChange={this.textChangeHandler}/>
        <p>Above text length: {this.state.text.textLength}</p>
        <Validator length={this.state.text.textLength}/>
        {chars}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
