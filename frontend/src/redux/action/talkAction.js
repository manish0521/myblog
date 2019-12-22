import { CREATE_COMMENT, ERROR_CREATE_TALK, GET_ALL_COMMENTS, GET_COMMENT_BY_ID, DELETE_USER_COMMENT_BY_ID } from '../actionTypes/actionTypes';
import Axios from '../../lib/Axios';


export const handleUserCommentByID = (id) => async dispatch => {
  try {

    let deletedByID = await Axios.delete(`/comment/delete-by-id/${id}`);

    dispatch({
      type: DELETE_USER_COMMENT_BY_ID,
      payload: deletedByID,
      id
    })
 
  } catch (error) {
    console.log(error)
    dispatch(errorCreateTalk(error))
    return Promise.reject(error);
  }
}

// export const getAllUserComments = (id) => async dispatch => {

//   try {

//     let foundAllUserComments = await Axios.get(`/comment/get-all-user-comments/${id}`)
  
//     dispatch({
//       type: GET_ALL_USER_COMMENTS,
//       payload: foundAllUserComments.data
//     })

//     return Promise.resolve(foundAllUserComments.data);

//   } catch (error) {
//     console.log(error)
//     dispatch(errorCreateTalk(error))
//     return Promise.reject(error);
//   }


// }

export const createComment = (commentInfo) => async dispatch => {

  let commentObj = {
    id: commentInfo.id,
    title: commentInfo.title, 
    comment: commentInfo.comment, 
    image: commentInfo.image
  }

  try {

    let success = await Axios.post('/comment/create-comment', commentObj)
    console.log(success)
    dispatch(successCreateComment(success.data));

    return Promise.resolve(success);

  } catch (error) {
    console.log(error)
    dispatch(errorCreateTalk(error))
    return Promise.reject(error);
  }

}

export const getAllComments = () => async dispatch => {

  try {

    let success = await Axios.get(`/comment/get-all-comments`)

    dispatch({
      type: GET_ALL_COMMENTS,
      payload: success.data
    })
    return Promise.resolve(success.data)
  } catch (error) {
    console.log(error)
    dispatch(errorCreateTalk(error))
    return Promise.reject(error);
  }

}

const successCreateComment = (createdComment) => dispatch => {
  dispatch({
    type: CREATE_COMMENT,
    payload: createdComment
  })
}

const errorCreateTalk = (message) => dispatch => {
  dispatch({
    type: ERROR_CREATE_TALK,
    payload: message
  })
}

export const getCommentByID = (id) => async dispatch => {

  try {
    let foundComment = await Axios.get(`/comment/get-comment-by-id/${id}`)

    dispatch({
      type: GET_COMMENT_BY_ID,
      payload: foundComment.data
    });

    return Promise.resolve(foundComment.data)

  } catch (error) {
    dispatch(errorCreateTalk(error));
    return Promise.reject(error);
  }

}