import React, { Component } from 'react'
import { connect } from 'react-redux';
import ResumeHelper from "../../ResumeComponents/ResumeHelper";

 class HomePage extends Component {
    render() {
        return (
            <div className='App'>
                 <div className='resume-section'>

                    
                    <ResumeHelper/>
                 </div>
                
            </div>
        )
    }
}
export default connect(null, null)(HomePage)