import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import CardContainer from './components/CardContainer';
import CardContainerHooks from './components/CardContainerHooks';
import Hello from './Hello';
import Button from 'antd/es/button';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Hello name={this.state.name} />
        <CardContainerHooks />
        <CardContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
