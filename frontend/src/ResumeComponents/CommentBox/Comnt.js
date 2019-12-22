
import React, { Component } from 'react'
import "../CommentBox/commentApp.scss";

export default class Comnt extends Component {
    

    render () {
        return(
            <>
          <div className="comment">
            <p className="comment-header">{this.props.author}</p>
            <p className="comment-body">- {this.props.body}</p>
            <div className="comment-footer">
              <button className="comment-footer-delete" onClick={() => this.props.onDelete(this.props.comment.id)}>Delete Comment</button>
            </div>
          </div>

          </>
        );
      }
      
}
