import React, { Component } from 'react'
import './AuthorBrief.css'
import { Link } from 'react-router-dom'

class AuthorBrief extends Component {
  render(props) {
    return (
      <Link className='AuthorBrief' to={`/author/${this.props.author.id}`}>
        <img src={this.props.author.avatar} alt='author' />
        <h3>{this.props.author.name}</h3>
        <span>{`(${this.props.author.birth}~${this.props.author.death})`}</span>
        <p>{this.props.author.intro}</p>
      </Link>
    )
  }
}

export default AuthorBrief