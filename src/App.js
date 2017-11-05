import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Archive from './Archive'
import About from './About'
import Post from './Post'
import Author from './Author'
import AuthorHome from './AuthorHome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <section className='container'>
          <Route exact path="/" component={Home} />
          <Route path="/archive" component={Archive} />
          <Route path="/about" component={About} />
          <Route path="/post/:id" component={Post} />
          <Route exact path='/author/:id' component={Author} />
          <Route exact path="/author" component={AuthorHome} />
        </section>
      </div>
    )
  }
}

export default App
