import { CREATE_COMMENT, ERROR_CREATE_TALK, GET_ALL_COMMENTS, GET_COMMENT_BY_ID, DELETE_USER_COMMENT_BY_ID } from '../actionTypes/actionTypes';



const initialState = {
   comments: [],
   message: null,
   comment: null,
   userComments: []
 };

export default function(state = initialState, action) {
  switch (action.type) {

    // case DELETE_USER_COMMENT_BY_ID: 
    //   let newUserCommentArray = state.userComments.filter(comment => comment._id !== action.id)
    //   return {
    //     ...state, 
    //     userComments: newUserCommentArray
    //   }

    // case GET_ALL_USER_TALKS:
    //   return {
    //     ...state, 
    //     userTalks: [...action.payload]
    //   }

    case GET_ALL_COMMENTS: 
      return {
        ...state, 
        comments: [...action.payload]
      }

    case CREATE_COMMENT:
      let newCommentsArray = [...state.comments, action.payload];
      return {
       ...state,
        comments: newCommentsArray
      };

    case GET_COMMENT_BY_ID: 
    
      return {
        ...state, 
        comment: action.payload
      }  
    case ERROR_CREATE_TALK:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}
