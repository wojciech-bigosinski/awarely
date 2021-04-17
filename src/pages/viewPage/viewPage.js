import { useHistory, useParams, withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import './viewPage.css';
import { Button, Badge, Row, Col, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeTheme } from '../../redux/actions';


class ViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "",
        };
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }

        postData('https://corrus.pythonanywhere.com/getEditor/', { editor: this.props.match.params.id })
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });

    }



    render() {
        return (
            <header className="App-header">
                <div className="beginRectangle">
                    <h1>
                        Awarely
                    </h1>
                    <Row>
                        {this.props.match.params.id}
                    </Row>
                </div>
            </header>
        );
    }
}


export default withRouter((ViewPage));