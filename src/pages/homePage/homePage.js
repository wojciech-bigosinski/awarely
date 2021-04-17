import React, { Component } from 'react';
import './homePage.css';
import { Button, Badge, Row, Col, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      redirect: false
    };

    this.onThemeInput = this.onThemeInput.bind(this);
  }

  componentDidMount(){
    this.themeInput.focus(); 
  }
  

  
  render() {
    return (
          <header className="App-header">
            <div className="beginRectangle">
              <h1>
                Awarely
              </h1>
              <Row>
                <Col>
                  <Form onSubmit={e => this.onFormSubmit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>I want to raise <Badge variant="secondary">awareness</Badge> about... </Form.Label>
                        <Form.Control  className="" ref={(input) => { this.themeInput = input; }} 
                          style={{borderRadius: "0.6rem", borderStyle: "dashed", borderColor: "#3AAFA9", color: "white", textShadow: "2px 2px #2B7A78", 
                          alignItems: "center", textAlign: "center", backgroundColor: "transparent", height: "1.4rem", paddingTop: "1rem", width: "20rem", fontSize: "1.9rem", fontFamily: "Roboto"}} 
                          onChange={this.onThemeInput} maxLength="50"
                        />
                    </Form.Group>
                      <Form.Row className="align-items-center submitButton">
                        <Button className="beginButton" style={{height: "4rem", width: "8rem"}}>
                          <Link to="/editor" style={{color: "gray", textDecoration: "none"}}>Go</Link>
                        </Button>
                      </Form.Row> 
                </Form>
                </Col>
              </Row>
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