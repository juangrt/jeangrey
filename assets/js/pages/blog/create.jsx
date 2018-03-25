import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { upload } from '../../actions'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'

const mapDispatchToProps = dispatch => 
  ({
    onUpload(file) {
      return dispatch(upload(file))
    }
  })


class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() }

    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    this.uploadCallback = this.uploadCallback.bind(this)
  }

  onEditorStateChange(editorState) {
    this.setState({ editorState })
  }

  uploadCallback(file) {
    return this.props.onUpload(file);
  }

  componentDidMount() {
    document.title = '1N Garzon | Create Post'
  }

  render() {
    return (
      <div id="new-blog-page">
        <div className='container'>
          <h1>New Post</h1>
          <div style={{float: 'right', marginBottom: '1em'}}>
              Publish
              Save Draft
              Delete Post
          </div>
        </div>
        <div className='container'>
          <div className='input-group'>
            <input type="text" className="form-control" 
            placeholder="Title" aria-label="Title"/>
          </div>
          <div>
            <Editor 
              editorClassName="editor"
              placeholder="Begin Typing"
              toolbar={{ image: { uploadCallback: this.uploadCallback }}}
              editorState={this.state.editorState}
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
        </div>
      </div>
      )
  }
}

CreatePost.propTypes = {
    onUpload: PropTypes.func
}


export default connect(null, mapDispatchToProps)(CreatePost) 