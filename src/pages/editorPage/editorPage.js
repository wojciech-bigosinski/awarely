import React, { Component } from 'react';
import './editorPage.css';
import { Button, Badge, Row, Col, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      redirect: false
    };

    this.onThemeInput = this.onThemeInput.bind(this);
  }


  
  render() {
    return (
          <header className="App-header">
            <div className="beginRectangle">

            </div>
          </header>
    );
  }

  onThemeInput = (e) => {
    let theme = e.target.value;
    this.setState({
        theme: theme,
        redirect: true
    })
  };
}