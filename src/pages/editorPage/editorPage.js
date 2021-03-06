import React, { Component } from 'react';
import './editorPage.css';
import {Button, Badge, Row, Col, Container, Form} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { connect } from "react-redux";
import { changeEditorState, changeId } from '../../redux/actions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      editorHtml: '',
      themeEditor: 'snow',
      id: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.onThemeInput = this.onThemeInput.bind(this);
  }

  handleChange (html) {
    this.setState({ editorHtml: html });
    changeEditorState(html)
    console.log(html)
  }

  componentDidMount() {
    this.state = {
      theme: this.props.theme
    }
  }



  render() {
    let placeholder = "I want to raise awareness about " + this.props.theme;
    return (
      <Container className="textEditor">
        {this.props.theme ?
            <h1 style={{marginTop: "0px"}}>{this.props.theme}</h1> :
            <h1 style={{marginTop: "0px"}}>Editor</h1>
        }
        <Row style={{marginTop: "5rem"}}>
          <Col style={{textShadow: "0px 0px white", color: "black", backgroundColor: "#FEFFFF", width: "50rem", marginLeft: "35rem"}}>
            <ReactQuill
                theme={this.state.themeEditor}
                onChange={this.handleChange}
                value={this.state.editorHtml}
                modules={Editor.modules}
                formats={Editor.formats}
                bounds={'.app'}
                placeholder={placeholder}
            />
          </Col>
        </Row>
        <Row style={{}}>
          <Col>
            <Button className="beginButton" style={{height: "4rem", width: "8rem", position: "fixed", bottom: "0.5rem", left: "0.5rem"}}>
              <Link to="/" style={{color: "gray", textDecoration: "none"}}>Awarely</Link>
            </Button>
            <Button onClick={() => this.saveEditor(this.state)} className="beginButton" style={{height: "4rem", width: "8rem", position: "fixed", bottom: "0.5rem", right: "0.5rem"}}>
              <Link style={{color: "gray", textDecoration: "none"}}>Next</Link>
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
        redirect: true
    })
  };

  async saveEditor(state) {
        const requestOptions = {
          method: 'POST',
          mode: "cors",
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Methods': 'POST'
          },
          body: JSON.stringify(state)
        };
        let response = await fetch('https://corrus.pythonanywhere.com/saveEditor/', requestOptions)
        let json = await response.json()
        await changeId(json.id)
        this.props.history.push('/share', json);
  };
}

Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
      {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]


const mapStateToProps = (state) => ({
  theme: state.state.theme,
  editor: state.state.editor
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditorState: (editor) => dispatch(changeEditorState(editor)),
    changeId: (id) => dispatch(changeId(id))
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorPage))