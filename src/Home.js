import React, { Component } from 'react'
import './Home.css'
import avatar from './assets/img/avatar.png'

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <img src={avatar} alt='avatar' />
        <p>A Web developer</p>
        <p>Who do web stuffs so you don't need to</p>
        <p>Now in Dongguang</p>
      </div>
    )
  }
}

export default Home