import React, { Component } from 'react';
import './sharePage.css';
import {Button, Badge, Row, Col, Form, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    EmailIcon,
    RedditIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon
} from "react-share";


class SharePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      editor: this.props.editor
    };
  }

  render() {
      const title = "Awarely"
    return (
        <Container className="App-header">
          <h1 style={{marginTop: "0px"}}>Now get sharing!</h1>
          <Row style={{marginTop: "20rem"}}>
            <Col className="rectangle">
                <Row style={{marginTop: "0rem"}}>
                    <EmailShareButton
                        style={{marginTop: "0.8rem", marginRight: "0.3rem"}}
                        url={"https://awarely-hack.web.app/"}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={60} round />
                    </EmailShareButton>
                    <FacebookShareButton
                        style={{marginRight: "0.3rem"}}
                        url={"https://awarely-hack.web.app/"}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={60} round />
                    </FacebookShareButton>
                    <FacebookMessengerShareButton
                        style={{marginRight: "0.3rem"}}
                        url={"https://awarely-hack.web.app/"}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookMessengerIcon size={60} round />
                    </FacebookMessengerShareButton>
                    <LinkedinShareButton
                        style={{marginRight: "0.3rem"}}
                        url={"https://awarely-hack.web.app/"}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <LinkedinIcon size={60} round />
                    </LinkedinShareButton>
                    <RedditShareButton
                        style={{marginRight: "0.3rem"}}
                        url={"https://awarely-hack.web.app/"}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <RedditIcon size={60} round />
                    </RedditShareButton>
                    <TwitterShareButton
                        url={"https://awarely-hack.web.app/"}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={60} round />
                    </TwitterShareButton>
                </Row>
                <Row style={{marginTop: "4rem"}}>
                    <Link to="/" style={{color: "white", textDecoration: "none"}}>Awarely</Link>
                </Row>
            </Col>
          </Row>
          <Row>
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