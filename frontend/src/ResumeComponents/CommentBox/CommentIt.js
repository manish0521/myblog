// import React, { Component } from 'react'
// import ButtonClass from '../../Factory/Button/ButtonClass'
// import Spinner from '../../Factory/Spinner/Spinner';
// import { connect } from 'react-redux';
// import ReactDOM from 'react-dom';
// import "./Comments.scss"

// import CommentList from '../CommentBox/CommentList';
// // import './App.css'

// // import CommentForm from "./CommentList";
// // import CommentEdit from "./Comment";

// import { handleGetAllComments,
//     handleAddNewComments,
//     handledelete,
    
//     handleedit
// } from '../../api/api';

// class CommentIt extends Component {

//     constructor(props) {
//         super(props);
    
//         this.state = {
//           commentList: [],
//           isAuth: false
//         }
    
//         this.apphandleAddNewCommentList = this.apphandleAddNewCommentList.bind(this);
//         this.appHandleDeleteByID = this.appHandleDeleteByID.bind(this)
        
//         this.appHandleNewEditCommentByID = this.appHandleNewEditCommentByID.bind(this)
//         this.handleAuthSubmit = this.handleAuthSubmit.bind(this)
//       }
    
      
    
//       componentDidUpdate(prevProps, prevState) {
        
//         if(prevState.isAuth === false && this.state.isAuth === true){
    
//                 this.getAllComment();
//         }
//       }
    
//       getAllComment(){
//            handleGetAllComments()
//             .then( data =>{
//                 this.setState({
//                     commentList: data
//                 })
//             })
//             .catch(error =>{
//                 console.log(error)
//             })
//       }
    
//        apphandleAddNewCommentList (newCommentFromCommentList) {
        
//         handleAddNewComments(newCommentFromCommentList)
//             .then(createdNewComment =>{
                
//                 this.setState((prevState)=>{
//                     return {
//                       commentList: [...prevState.commentList, createdNewComment]
//                     }
//                   })
//             })
//             .catch(error => {
//                 console.log(error)
//               })
        
//        }
    
//        appHandleDeleteByID (id) {
        
//        handledelete(id)
//             .then(deleted => {
//                 const  deletedID = deleted._id
    
//                 let newFilteredCommentList = this.state.commentList.filter((item) => ( item._id !== deletedID))
    
//                 this.setState({
                
//                     commentList: newFilteredCommentList
                  
//                 })
//             })
//             .catch(error =>{
//                 console.log(error)
//             })
        
//        }
    
       
//        appHandleNewEditCommentByID(id, newComment) {
        
//         handleedit(id, newComment)
        
//             .then(updatedComment =>{
         
//                 let newCompletedList = this.state.todoList.map((item) => {
//                     if (item._id === id) {
//                         item.comment = updatedComment.comment
//                         return item;
//                     } else {
//                         return item
//                     }
//                     })
                    
//                     this.setState({
//                     commentList: newCompletedList
//                     })
//             })
//             .catch(error =>{
//                 console.log(error)
//             })
    
//        }
        
//         handleAuthSubmit() {
            
//             this.setState((prevState)=>{
//                 return {
//                   isAuth: !prevState.isAuth
//                 }
//               })
//         }
    
//       render() {
//         return (
//           <div className="commentSection">
    
//              <CommentList 
//                           commentList={this.state.commentList}
//                           apphandleAddNewCommentList={this.apphandleAddNewCommentList}
//                           appHandleDeleteByID={this.appHandleDeleteByID}
//                           appHandleCompletedByID={this.appHandleCompletedByID}
//                           appHandleNewEditCommentByID={this.appHandleNewEditCommentByID}
//             /> 
//           </div> 
//         )
//       }
// }

// const mapStateToProps = state => {
//   return {
//     authUser: state.authUser
//   };
// };

// export default connect(mapStateToProps, null)(CommentIt)