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
import { connect } from "react-redux";
import { changeEditorState } from '../../redux/actions';


class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      editorState: EditorState.createEmpty(),
    };

    this.onThemeInput = this.onThemeInput.bind(this);
  }

  componentDidMount() {
    this.state = {
      theme: this.props.theme
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
  };

  
  render() {
    const { editorState } = this.state;
    return (
      <Container className="App-header">
        <h1>{this.props.theme}</h1>
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

const mapStateToProps = (state) => ({
  theme: state.state.theme,
  editor: state.state.editor
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditorState: (user) => dispatch(changeEditorState(user))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorPage)