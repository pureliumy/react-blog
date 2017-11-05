import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import onlyReducer from './reducer'
import data from './data'

// 本地存储指示变量
let local = false;
let post, author, comment

// 本地没有存储数据，则将初始数据存入localStorage并更新local
if (!window.localStorage.getItem('data')) {
    const dataString = JSON.stringify(data)
    window.localStorage.setItem('data', dataString)
} else {
    local = true
}

if (local) {
    const dataString = window.localStorage.getItem('data');
    ({ post, author, comment } = JSON.parse(dataString))
} else {
    ({ post, author, comment } = data)
}

const state = {
    nextCommentId: comment.length + 2,
    nextUserId: 9,
    post: post,
    author: author,
    comment: comment
}

const store = createStore(onlyReducer, state)

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'))

registerServiceWorker();
