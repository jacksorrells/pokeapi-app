import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './components/classes/Navbar';
import NavbarHooks from './components/hooks/NavbarHooks';
import CardContainer from './components/classes/CardContainer';
import CardContainerHooks from './components/hooks/CardContainerHooks';
import Hello from './Hello';
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
        <NavbarHooks />
        <Hello name={this.state.name} />
        <CardContainerHooks />
        <CardContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
