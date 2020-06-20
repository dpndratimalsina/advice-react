import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    advice: ''
  };
  componentDidMount() {
    this.fetchAdvice();
  };
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error)
      });
  };
  render() {
    return (
      <div className="App">
        <h1> {this.state.advice}</h1>
        <button onClick={this.fetchAdvice}>Give me adviceS </button>
      </div>
    );
  }
}

export default App;
