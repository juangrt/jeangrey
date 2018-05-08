import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { upload, publishPost } from '../../actions'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'


const mapDispatchToProps = dispatch => 
  ({
    onUpload(file) {
      return dispatch(upload(file))
    },
    onPublishPost({title, body}) {
      return dispatch(publishPost(title, body))
    }
  })

const mapStateToProps = (state, props) => 
  ({
    loading: state.loading
  })


class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() }

    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.uploadCallback = this.uploadCallback.bind(this)
    this.onPublishClicked = this.onPublishClicked.bind(this)
  }

  onEditorStateChange(editorState) {
    this.setState({ editorState })
  }

  onPublishClicked(event) {
    const html = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    this.props.onPublishPost({title: this.state.title, body: html}).then( response => {
      this.setState({ post: response.data } )
    }).catch( error => {
      
    });
  }

  onUpdateClicked(event) {
    const html = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    this.props.onUpdatePost({id: this.state.post.id, title: this.state.title, body: html}).then( response => {
      this.setState({ post: response.data } )
    }).catch( error => {
      
    });
  }

  onRenderTitle() {
    const type = this.state.post ? 'Edit' : 'New'
    const title = type + ' Post '

    const subtitle = this.state.post ? (
        <small style={{fontSize: '12px', color: '#999'}}>
          <i>(updated: { this.state.post.updated_at })</i>
        </small>
      ) : ''

    return (
      <h1 style={{flex: 1}}>
        { title }
        { subtitle }
      </h1>
    )

  }

  uploadCallback(file) {
    return this.props.onUpload(file);
  }

  componentDidMount() {
    document.title = '1N Garzon | Create Post'
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id="new-blog-page">
        <div className='container'>
          <div className="publish-toolbar">
            { this.onRenderTitle() }
            <div className="buttons">
              { 
                this.state.post ? <button type="button" className="btn btn-primary" disabled={this.state.loading} onClick={this.onPublishClicked}>Update</button> :
                <button type="button" className="btn btn-primary" disabled={this.state.loading} onClick={this.onPublishClicked}>Publish</button>
              }
              { !this.state.post ? <button type="button" className="btn btn-secondary" disabled={this.state.loading}>Save Draft</button> : '' }
              { this.state.post ? <button type="button" className="btn btn-danger" disabled={this.state.loading}>Delete Post</button> : '' }
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='input-group'>
            <input type="text" name='title' onChange={this.handleInputChange} 
              className="form-control" 
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
    onUpload: PropTypes.func,
    onPublishPost: PropTypes.func,
    loading: PropTypes.bool
}


export default connect(null, mapDispatchToProps)(CreatePost) 