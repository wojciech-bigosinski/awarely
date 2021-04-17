import React, { Component } from 'react';
import './sharePage.css';
import {Button, Badge, Row, Col, Form, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class SharePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      editor: this.props.editor
    };
  }

  render() {
    return (
        <Container className="App-header">
          <h1 style={{marginTop: "0px"}}>Now get sharing!</h1>
          <Row style={{marginTop: "20rem"}}>
            <Col className="rectangle">

            </Col>
          </Row>
          <Row style={{}}>
            <Col>
              <Button className="beginButton" style={{height: "4rem", width: "8rem", position: "fixed", bottom: "0.5rem", left: "0.5rem"}}>
                <Link to="/" style={{color: "gray", textDecoration: "none"}}>Awarely</Link>
              </Button>
            </Col>
          </Row>
        </Container>
    );
  }

  onThemeInput = (e) => {
    let theme = e.target.value;
    this.setState({
        theme: theme,
    })
    this.props.changeTheme(theme)
  };
}

const mapStateToProps = (state) => ({
  theme: state.state.theme,
  editor: state.state.editor
})

export default connect(
    mapStateToProps
)(SharePage)