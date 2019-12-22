import Axios from "../lib/Axios";
import jwt_decode from 'jwt-decode'

export const handleGetAllComments = () => {
    let token = localStorage.getItem('jwtToken');

    let { id } = jwt_decode(token)

    return new Promise((resolve, reject) => {
        Axios.get(`/comment/get-all-comments?id=${id}`)
        .then ( comments =>{
            console.log(comments)
           const{data} = comments;
           resolve(data.comment)
           
        })
        .catch(error =>{
            reject(error)
        })
    })
}

export const handleAddNewComments = (newCommentFromCommentList) => {
    
    return new Promise((resolve, reject) => {
        const { newComment } = newCommentFromCommentList;

      Axios.post('/comment/create-new-comment', {
        newComment
      })
      .then(createdNewComment => {
        const{data} = createdNewComment;

           resolve(data)

      })
      .catch(error => {
        reject(error)
      })

    })
}
export const handledelete = (id) => {
    
    return new Promise((resolve, reject) => {
        
        Axios.delete(`/comment/delete-by-id/${id}`)

      .then(deleted => {
        const{data} = deleted;

        resolve(data)

        })
        .catch(error =>{
            reject(error)
        })

    })
}

export const handlecomplete = (id) => {
    
    return new Promise((resolve, reject) => {
        
        Axios.put(`/comment/complete-by-id/${id}`)

      .then(completed => {
        const{data} = completed;

        resolve(data)

        })
        .catch(error =>{
            reject(error)
        })

    })
}

export const handleedit = (id,newComment) => {
    
    return new Promise((resolve, reject) => {
        
        Axios.put(`/comment/update-comment-by-id/${id}`, {comment: newComment})

      .then(newComment => {
   
        const{data} = newComment;

        resolve(data)

        })
        .catch(error =>{
            reject(error)
        })

    })
}

export const apiAuth = ({email, password}) => {

    return new Promise((resolve, reject) => {
        Axios.post('/users/sign-up-and-sign-in', {
            email,
            password
        })
        .then(results => {
            const {token} = results.data;

            localStorage.setItem('jwtToken', token);

            const decodedToken = jwt_decode(token);
            resolve(decodedToken)
    
            })
            .catch(error =>{
                reject(error)
            })
    })
}

export const checkIfTokenIsValid = () =>{
    return new Promise((resolve, reject) => {
         // grab token from storage
         let token = localStorage.getItem('jwtToken')
        
         if (token) {

        // get current time using Date object
        let currentTime = Date.now()/1000;

        // decode the token
        let decoded = jwt_decode(token);

        // if decode exp time is less than currentTime

        if (decoded.exp < currentTime){
            //  remove the token
            localStorage.removeItem('jwtToken');
            reject(null)  // reject null
        } else {
             // decode the token info
            let user = { // put it in an object
                id: decoded.id,
                email: decoded.email 
            }
            // resolve the object
            resolve(user)
        }
        } else {
            reject('login to use this')
        }
        
        
    })
}
