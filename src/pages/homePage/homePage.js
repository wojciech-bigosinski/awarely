import React, { Component } from 'react';
import './homePage.css';
import MainNavbar from "../../shell/navbar";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="App">
        <MainNavbar informationButton="true"/>
        <header className="App-header">
          <div className="beginRectangle">
          <h1>
            Report a hate crime
          </h1>
          <h5>
            Make the world a better place
          </h5>
          <Button className="beginButton">
            <Link to="/begin">Begin</Link>
          </Button>
          </div>
        </header>
      </div>
    );
  }
}

