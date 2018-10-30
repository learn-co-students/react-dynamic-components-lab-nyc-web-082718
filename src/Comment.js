import React, { Component } from 'react'
class Commment extends Component {
  render(){
    return (
      <div className="comment">
      {this.props.commentText}
      </div>
    )
  }
}

export default Commment;
