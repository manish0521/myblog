import React, { Component } from 'react'
import "../CommentBox/commentApp.scss";


export default class commentForm extends Component {
    _handleSubmitComment(event) { 
        event.preventDefault();   // prevents page from reloading on submit
        let author = this._author;
        let body = this._body;
        this.props.addComment(author.value, body.value);
      }
    render() {
        return (
          <form className="comment-form" onSubmit={this._handleSubmitComment.bind(this)}>
            <div className="comment-form-fields">
              <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
              <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
            </div>
            <div className="comment-form-actions">
              <button type="submit">Post Comment</button>
            </div>
          </form>
        );
      } 
}
