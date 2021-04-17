import { useHistory, useParams, withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import './viewPage.css';
import { Button, Badge, Row, Col, Form } from 'react-bootstrap';
import {changeId, changeTheme} from '../../redux/actions';


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
        this.setState({editor: json.editor})
    }



    render() {
        return (
            <header className="App-header">
                <div>
                    <h1>
                        Awarely
                    </h1>
                    <Row>
                        {this.state.editor}
                    </Row>
                </div>
            </header>
        );
    }
}


export default withRouter((ViewPage));