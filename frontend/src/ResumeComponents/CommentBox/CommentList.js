// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// // import './TodoList.css'
// import Comment from './Comment'

// export default class CommentList extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             newComment: '',
//         }

//         this.handleOnChange = this.handleOnChange.bind(this);
//         this.handleNewCommentSubmit = this.handleNewCommentSubmit.bind(this);
//     }

//     handleOnChange (event) {
//         this.setState({
//             newComment: event.target.value
//         })
//     }

//     handleNewCommentSubmit (event) {
//         event.preventDefault();

//         this.props.apphandleAddNewCommentList(this.state)

//         this.setState({
//             newComment: ''
//         })
//     }
   
//     showCommentList () {
//         return this.props.commentList.map((item) => {
//             return (
//                 <Comment 
//                     key={item._id}
//                     id={item._id}
//                     item={item.comment}
                    
//                     commentHandleDeleteByID={this.props.appHandleDeleteByID}
//                     commentHandleCompletedByID={this.props.appHandleCompletedByID}
//                     commentHandleNewEditCommentByID={this.props.appHandleNewEditCommentByID}
//                 />
//             )
//         })
//     }

//     render() {
       
//         return (
          
//           <>
//             <form onSubmit={this.handleNewCommentSubmit}>

//                 <input 
//                     name="newComment" 
//                     value={this.state.newComment}
//                     onChange={this.handleOnChange}
//                     />
//             <button>Submit</button>
//             </form>

//             <ul style={styles.listStyle}>
//              <li>{this.showCommentList()}</li>

//             </ul>
            
//           </>
         
//         )
//     }
// }

// CommentList.propTypes = {
//     commentList: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string,
//             comment: PropTypes.string,
            
//         })
//     )
// }

// const styles = {
//     listStyle: {
//       listStyleType: 'none'
//     }
//   }
