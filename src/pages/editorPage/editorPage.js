import React, { Component } from 'react';
import './editorPage.css';
import { Button, Badge, Row, Col, Form, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  convertToRaw,
} from 'draft-js';


export default class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      redirect: false,
      editorState: EditorState.createEmpty(),
    };

    this.onThemeInput = this.onThemeInput.bind(this);
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    console.log(value)
  };

  
  render() {
    const { editorState } = this.state;
    return (
      <Container className="App-header">
        <h1>Mental health</h1>
        <Editor
            style={{textShadow: "2px 2px #2B7A78"}}
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
        />
      </Container>
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