import React, { Component } from 'react';
import Form from './components/Form'
import Menu from './components/Menu'
import Content from './components/Content'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="header">
          <Menu/>
          <Form/>
        </header>
        <main className="main">
          <Content/>
        </main>
      </div>
    );
  }
}

export default App;
