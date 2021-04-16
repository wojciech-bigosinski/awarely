import React, { Component } from 'react';
import './homePage.css';
import { Button, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {

    };
  }

  render() {
    return (
      <header className="App-header">
        <div className="beginRectangle">
          <h1>
            Awarely
          </h1>
          <h4>
            I want raise <Badge variant="secondary">awareness</Badge> about...
          </h4>
          <Button className="beginButton">
            <Link to="/begin">Go</Link>
          </Button>
        </div>
      </header>
    );
  }
}

