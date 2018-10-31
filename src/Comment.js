import React, { Component } from 'react';

export default class Comment extends Component {

  render() {
    // debugger
    return (
      <div className="comment">
        {this.props.commentText}  
      </div>
    )
  }

}
