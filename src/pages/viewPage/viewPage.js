import { useHistory, useParams, withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import './viewPage.css';
import { Button, Badge, Row, Col, Form } from 'react-bootstrap';
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
import parse from "html-react-parser";

class ViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "",
            editor: ""
        };
        this.getData()
    }

    async getData() {
        const requestOptions = {
            method: 'POST',
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Methods': 'POST'
            },
            body: JSON.stringify({editor: this.props.match.params.id})
        };
        let response = await fetch('https://corrus.pythonanywhere.com/getEditor/', requestOptions)
        let json = await response.json()
        console.log(json)
        this.setState({
            editor: json.editor,
            theme: json.theme
        })
    }



    render() {
        const title = "Awarely"
        let link = "awarely-hack.web.app/view/" + this.props.match.params.id
        return (
            <header className="App-header">
                <Row style={{position: "fixed", top: "0.5rem"}}>
                    <h1>
                        {this.state.theme}
                    </h1>
                </Row>
                <Row>
                    <Col style={{marginRight: "3rem", marginLeft: "3rem"}}>
                        <p className="breakAll" style={{wordWrap: "break-word", overflowWrap: "break-word"}}>{parse(this.state.editor)}</p>
                    </Col>
                </Row>
                <Row style={{marginTop: "0rem", position: "fixed", bottom: "2rem"}}>
                    <EmailShareButton
                        style={{marginTop: "2rem", marginRight: "0.3rem"}}
                        url={"https://awarely-hack.web.app/view/" + this.props.id}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={48} round />
                    </EmailShareButton>
                    <FacebookShareButton
                        style={{marginRight: "0.3rem"}}
                        url={"https://awarely-hack.web.app/view/" + this.props.id}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={48} round />
                    </FacebookShareButton>
                    <FacebookMessengerShareButton
                        style={{marginRight: "0.3rem"}}
                        url={link}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookMessengerIcon size={48} round />
                    </FacebookMessengerShareButton>
                    <LinkedinShareButton
                        style={{marginRight: "0.3rem"}}
                        url={link}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <LinkedinIcon size={48} round />
                    </LinkedinShareButton>
                    <RedditShareButton
                        style={{marginRight: "0.3rem"}}
                        url={link}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <RedditIcon size={48} round />
                    </RedditShareButton>
                    <TwitterShareButton
                        url={link}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={48} round />
                    </TwitterShareButton>
                    <div style={{fontSize: "2rem", position: "fixed", bottom: "0.2rem", justifyContent: "center", marginLeft: "6rem"}}>
                        Awarely
                    </div>
                </Row>
            </header>
        );
    }
}


export default withRouter((ViewPage));