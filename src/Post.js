import React from 'react'
import './Post.css'
import { connect } from 'react-redux'
import Comment from './Comment'

const Post = ({ post, author, comment, match, addComment }) => {

  const thisPost = post[match.params.id - 1]
  const postTitle = thisPost.title
  const postHTML = thisPost.content
  const postAuthor = author.filter((author) => (
    author.id === thisPost.author
  ))[0].name
  const setHTML = { __html: `${postHTML}` }
  const postComment = comment.filter((c) => (
    c.post === +match.params.id
  ))

  return (
    <div className='Post'>
      <h3>{postTitle}</h3>
      <h4>{postAuthor}</h4>
      <p dangerouslySetInnerHTML={setHTML}></p>
      <div className='comments'>
        {
          postComment.map((c, index) => (
            <div key={c.id} className='single'>
              <span className='name'>{c['author_name']}</span>
              <span className='time'>{c.date}</span>
              <hr />
              <span>{c.content}</span>
            </div>
          ))
        }
      </div>
      <Comment addComment={addComment} post={thisPost}/>
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.post,
  comment: state.comment,
  author: state.author
})

const mapDispatchToProps = dispatch => ({
  addComment(comment) {
    dispatch({
      type: 'ADD_COMMENT',
      comment
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)