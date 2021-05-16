import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Col, Row, Divider } from 'antd';
class CommentEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
        };
        
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
      }
      
      onEditorStateChange(editorState) {
        this.setState({editorState,});
      };
      render() {
        const { editorState } = this.state;
          return (
            <div>
                <Divider horizontal><span>评论区</span></Divider>
                <Row justify="center">
                    <Col span={19}>
                        <div style={{border:"1px, solid, black", height:"300px",background: "white"}}>
                        <Editor
                        initialEditorState={editorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"                                                                        
                        onEditorStateChange={this.onEditorStateChange}
                        />
                        </div>
                    </Col>
                </Row>
            </div>
          )
       }
}

export default CommentEditor;