import React, { Component } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <NavLink to='/' className='logo'>Liumy</NavLink>
        <nav>
          <NavLink to='/archive'>Archive</NavLink>
          <NavLink to='/author'>Author</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
      </div>
    )
  }
}

export default Nav