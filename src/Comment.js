import React, { Component } from 'react'
import './Comment.css'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author_name: '',
      content: '',
      post: this.props.post.id
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    const time = new Date()
    const year = time.getFullYear()
    const month = (time.getMonth() === 12) ? 1 : time.getMonth() + 1
    const day = time.getDate()
    const date = `${year}年${month}月${day}日`
    this.props.addComment({ date, ...this.state })
    this.setState({
      author_name: '',
      content: '',
      post: this.props.post.id
    })
  }

  render(props) {
    return (
      <div className='comment'>
        <textarea placeholder='不知大侠有何高见？' onChange={this.handleChange} name='content' value={this.state.content} />
        <br />
        <input placeholder='请问尊姓大名' onChange={this.handleChange} name='author_name' value={this.state['author_name']} />
        <button onClick={this.handleSubmit}>评论</button>
      </div>
    )
  }
}

export default Comment