import React from 'react'
import AuthorBrief from './AuthorBrief'
import { connect } from 'react-redux'

const AuthorHome = ({ author }) => {
  const authors = author.map((a, index) => (
    <AuthorBrief author={a} key={a.id} />
  ))

  return (
    <div className='Author'>
      {authors}
    </div>
  )
}

const mapStateToProps = state => ({
  author: state.author
})

export default connect(mapStateToProps, null)(AuthorHome)