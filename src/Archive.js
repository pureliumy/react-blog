import React from 'react'
import './Archive.css'
import { connect } from 'react-redux'
import PostBrief from './PostBrief'

const Archive = ({ post, author }) => {

  const postList = post.map((p, index) => {
    const postAuthor = author.filter((author) => (
      author.id === p.author
    ))

    return (
      <PostBrief key={p.id} post={p} author={postAuthor[0]} />
    )
  })


  return (
    <div className='Archive'>
      {postList}
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post,
  author: state.author
})

export default connect(mapStateToProps, null)(Archive)