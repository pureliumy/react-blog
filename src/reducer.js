import data from './data.js'

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const newComment = {
        id: state.nextCommentId,
        author: state.nextUserId,
        avatar: './assets/img/avatar.png',
        ...action.comment
      }

      // 更改localStorage不应该写在这里，但目前没找到合理的类似于回调的地方
      data.comment.push(newComment)
      const dataString = JSON.stringify(data)
      window.localStorage.setItem('data', dataString)

      return {
        ...state,
        nextCommentId: state.nextCommentId + 1,
        nextUserId: state.nextUserId + 1,
        comment: [...state.comment, newComment]
      }

    default:
      return state
  }
}