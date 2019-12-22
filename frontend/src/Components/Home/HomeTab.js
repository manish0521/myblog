import React, { Component } from 'react'
import { connect } from 'react-redux';
import ShowAllComments from '../ShowAllComments/ShowAllComments';
import HomePage from './HomePage';

class HomeTab extends Component {

  render() {
    return (
      <div id="commentSection">
       {this.props.authUser.isAuthenticated ? <ShowAllComments user={this.props.authUser.user}/> : <HomePage/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};


export default connect(mapStateToProps, null)(HomeTab);