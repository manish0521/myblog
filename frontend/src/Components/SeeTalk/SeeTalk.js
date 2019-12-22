// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getTalkByID } from '../../redux/action/talkAction';
// import Spinner from '../../Factory/Spinner/Spinner';

// class SeeTalk extends Component {

//   state = {
//     title: '',
//     image: '',
//     talk: '',
//     isFetching: null
//   }

//   componentDidMount() {

//     if (this.props.location.state !== undefined) {
//       this.setState({
//         title: this.props.location.state.title,
//         image: this.props.location.state.image,
//         talk: this.props.location.state.talk
//       })
//     } else {

//       this.setState({
//         isFetching: true
//       })
//       this.props.getTalkByID(this.props.match.params.id)
//                 .then( talk => {
             
//                   this.setState({
//                     title: talk.title,
//                     image: talk.image,
//                     talk: talk.talk,
//                     isFetching: false
//                   })
//                 })
//                 .catch(error => {
//                   console.log(error)
//                 })
//     }

//   }

//   render() {
   
//     const { title, talk, image, isFetching } = this.state

//     let talkInfo = (
//         <div className='App'>
//         <h1>title {title}</h1>
//         <div><img src={image} alt="hamster"/></div>
//         <p>{talk}</p>
//       </div>
//     )

//     return (
//      isFetching ? <Spinner /> : talkInfo
//     )
//   }
// }

// export default connect(null, { getTalkByID })(SeeTalk);