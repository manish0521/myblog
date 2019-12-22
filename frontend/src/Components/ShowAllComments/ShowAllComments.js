import React, { Component } from 'react'
// import Talks from '../Talks/Talks'
import { connect } from 'react-redux';
import { getAllComments } from '../../redux/action/talkAction';
import Spinner from '../../Factory/Spinner/Spinner';

import Blog from "../../ResumeComponents/Blog";


 class ShowAllComments extends Component {

  state = {
    loading: false,
  }

  componentWillUnmount () {
    this.setState({
      loading: true
    })
    this.props.getAllComments()
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .catch(error => {
          this.setState({
            loading: false
          })
        })
  }

  render() {
    return (
        <>
      <div>
        Welcome {this.props.user.username} !
        
        <br/>
        {
                // this.state.loading ? <Spinner /> : <Talks />
                this.state.loading ? <Spinner /> : <Blog />
        }
      </div>
      
      </>

    )
  }
}

export default connect(null, {getAllComments})(ShowAllComments)
