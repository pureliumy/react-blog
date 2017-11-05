import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div className='About'>
        <h3>项目介绍</h3>
        <p>技术栈：ReactJS + Redux + React Router</p>
        <p>Github地址：<a href="https://github.com/pureliumy/react-blog">https://github.com/pureliumy/react-blog</a></p>

        <h4>简介</h4>
        <p>使用Create React App快速搭建基本的Webpack的React全家桶，完成博客前端展示程序，使用localStorage做开发数据存储，也可以快速与提供兼容API接口的后端服务集成。</p>
        <p>实现了主页、文章列表页、作者列表页、作者作品页和文章页面等，有文章、评论、作者三种数据类型，且实现了互相联系，文章页可以浏览评论，也可以增加评论，增加的评论数据会存储在localStorage中。</p>
        <p>对于多页面中重复的作者简介、文章列表组件实现了复用，容器组件与展示型组件有比较清晰的区分</p>

        <h4>流程简介</h4>
        <p>使用Redux提供的Provider容器，来放置Router组件包裹App组件（React Router 4.0 完全重写，很多之前版本的方法不再适用），由于Route组件具有和普通组件一样的形式，我们可以把Nav组件和Route组件混合，然后路由对应的组件中实现对store的访问，使得App组件单纯用来组织结构。</p>
        <p>对于需要使用Store中数据的组件，最好在外层包裹一层容器组件，容器组件使用connect方法连接mapStateToProps和mapDispatchToProps，当然，不一定需要两个都用到，只需要state做展示，不需要对state进行更改就不需要mapDispatchToProps</p>
        <p>容器组件拿到state与props合成的新的props后可以处理并传给展示型组件。如果需要修改state，就在展示型组件中调用props中传入的action，容器负责dispatch它，然后由纯函数reducer更新，实现单向数据流。</p>
      </div>
    )
  }
}

export default About