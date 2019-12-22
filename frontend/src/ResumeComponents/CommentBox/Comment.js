// import React, { Component } from 'react'
// import "./Comments.scss"

// export default class Comment extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             isToggle: false,
//             newEditComment: this.props.item,
//             currentComment: this.props.item,

    
//         }

//         this.handleEditOnChange = this.handleEditOnChange.bind(this);
//         this.handleEditToggle = this.handleEditToggle.bind(this);
//     }

     
//     handleEditToggle() {
//         this.setState( (prevState) => {
//             return {
//                 isToggle: !prevState.isToggle
//             }
//         })
//     }

//     handleEditOnChange (event) {
//         this.setState({
//             newEditTodo: event.target.value
            
//         })
//     }

//     render() {

//         const { id, 
//                 item, 
    
                
//                 commentHandleDeleteByID, 
                
//                 commentHandleNewEditCommentByID
//             } = this.props;
//         return (
//             <li key={id} >
                        
//             { 
//                 this.state.isToggle ?
//                 (
//                 <>
//                     <input 
//                         defaultValue={item}
//                         onChange={this.handleEditOnChange}
//                         />
//                     <button 
//                         className='buttonClass btn btn-danger'
//                         onClick={this.handleEditToggle}>
//                             Cancel
//                     </button>

//                     <button 
//                         className='buttonClass btn btn-primary' 
//                         disabled={this.state.newEditComment === this.state.currentComment? true : false}
//                         onClick={() => {
                            
//                            commentHandleNewEditCommentByID(id, this.state.newEditComment);
//                             this.handleEditToggle();
//                         }}>
//                             Submit
//                     </button>
                    
//                 </>
//                  ) : (
//                      <>
//                         {item}
//                         <button 
//                             className="fa fa-pencil edit-btn" aria-hidden="true"
//                             onClick={this.handleEditToggle}
//                             >Edit</button>
//                      </>
//                  )
                          
//             }




//         <button 
//             onClick={() => commentHandleDeleteByID(id)} 
//             className={`className="fa fa-trash-o del-btn" aria-hidden="true" ${this.state.isToggle ? 'makeButtonHidden' : ''}`}>
//                 Delete
//         </button>
        
//     </li>
//         )
//     }
// }
