import React from 'react'
import './Author.css'
import { connect } from 'react-redux'
import AuthorBrief from './AuthorBrief'
import PostBrief from './PostBrief'

const Author = ({ post, author, match }) => {

  const postList = post.filter((p) => (
    p.author === +match.params.id
  ))

  const briefs = postList.map((p, index) => (
    <PostBrief key={p.id} post={p} author={author[(+match.params.id) - 1]} />
  ))

  return (
    <div className='author'>
      <AuthorBrief author={author[(+match.params.id) - 1]} />
      {briefs}
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post,
  author: state.author
})

export default connect(mapStateToProps, null)(Author)