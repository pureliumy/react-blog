import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './PostBrief.css'

class PostBrief extends Component {
  render(props) {
    return (
      <div className='post-brief'>
        <h3 className='post-header'>
          <Link className='post-title' to={`/post/${this.props.post.id}`}>{this.props.post.title}</Link>
          <Link className='post-author' to={`/author/${this.props.author.id}`}>{this.props.author.name}</Link>
        </h3>
        <p className='post-intro'>{this.props.post.intro}</p>
      </div>
    )
  }
}

export default PostBrief