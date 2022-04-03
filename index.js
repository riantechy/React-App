import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      description: 'Enter your text here',
      mycar: 'Volvo',
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
          <h1>Hello {this.state.username} {this.state.age}</h1>
          <p>Enter your name:</p>
          <input type='text' name='username'onChange={this.myChangeHandler}/>
          <p>Enter your age:</p>
          <input type='text' name='age'onChange={this.myChangeHandler}/><br></br>
          {this.state.errormessage}
          <textarea value = {this.state.description}/><br></br>
      
          <select value={this.state.mycar}>
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
          </select>
     
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
