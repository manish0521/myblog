import {  CATEGORY_LIST_FILL, TOPIC_LIST_FILL, POST_LIST_FILL, CREATE_TOPIC, CREATE_POST } from '../actionTypes/actionTypes';

import jwt_decode from 'jwt-decode';

import { AUTH_USER_SUCCESSFUL, 
         AUTH_USER_LOGOUT,
         AUTH_SIGNUP_SUCCESSFUL, 
         AUTH_USER_FAILURE
        } from '../actionTypes/actionTypes';
import setAuthToken from '../../lib/setAuthToken';
import Axios from '../../lib/Axios';


export const signup = (userInfo) => async dispatch => {
  try {
    let success = await Axios.post('/users/sign-up', userInfo);
    dispatch(handleSignupSuccess(success.data.message));
    return Promise.resolve(success.data.message)
  } catch (error) {
    return Promise.reject(error);
  }
}

export const signin = (userInfo) => async dispatch => {
  try {
    let success = await Axios.post('/users/sign-in', userInfo);

    const { token } = success.data;

    dispatch(setAuthSuccessUser(token));
    setAuthToken(token);
    localStorage.setItem('jwtToken', token);
    return Promise.resolve('Signin successful!');
  } catch (error) {
    console.log(error)
    return Promise.reject(error);
  }
}

export const logout = () => dispatch => {
   localStorage.removeItem('jwtToken');
   setAuthToken(false);
   dispatch({
     type: AUTH_USER_LOGOUT
   });
}

export const setAuthSuccessUser = (userInfo) => dispatch => {
  dispatch({
    type: AUTH_USER_SUCCESSFUL,
    payload: userInfo
  })
}

const handleSignupSuccess = (message) => dispatch => {
  dispatch({
    type: AUTH_SIGNUP_SUCCESSFUL,
    payload: message
  })

}

export const handleErrorSignup = (message) => dispatch => {
  dispatch({
    type: AUTH_USER_FAILURE,
    payload: message
  })
}

export const categoryList = ()=> async dispatch => {
    try{
        let success = await Axios.get('/discussion/get-all-category')
        dispatch({
            type: CATEGORY_LIST_FILL,
            payload: success
        })
    }catch (error){
        return Promise.reject(error);
    }
}

export const topicList = (categoryId)=> async dispatch => {
    try{
        let success = await Axios.get(`/discussion/get-all-topics/${categoryId}`)
        dispatch({
            type: TOPIC_LIST_FILL,
            payload: success.data.topics
        })
        return Promise.resolve()
    }catch (error){
        return Promise.reject(error);
    }
}

export const createTopic = (categoryId, userId, name, post) => async dispatch => {
    try {
        let success = await Axios.post(`/discussion/create-topic/${categoryId}/${userId}`, {title: name, content: post})
        console.log(success.data)
        dispatch({
            type: CREATE_TOPIC,
            payload: success.data
        })
    } catch(error){
        return Promise.reject(error);
    }
}

export const createPost = (topicId, userId, post) => async dispatch => {
    try {
        let success = await Axios.post(`/discussion/create-post/${topicId}/${userId}`, {content: post})
        dispatch({
            type: CREATE_POST,
            payload: success.data.post
        })
    } catch(error){
        return Promise.reject(error);
    }
}

export const postList = (topicId)=> async dispatch => {
    try{
        let success = await Axios.get(`/discussion/get-all-posts/${topicId}`)
        console.log(success.data)
        dispatch({
            type: POST_LIST_FILL,
            payload: success.data.post
        })
    }catch (error){
        return Promise.reject(error);
    }
}

