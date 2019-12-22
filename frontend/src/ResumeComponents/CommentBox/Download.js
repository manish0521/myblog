import React, { Component } from 'react';
import { render } from 'react-dom';
// import './style.css';
import Doc from './DocService';
import PdfContainer from './PdfContainer';
import CommentApp from "../CommentBox/CommentApp";

class Download extends Component {

  
  createPdf = (html) => Doc.createPdf(html);

  render() {

    if(this.props.data){
        // var name = this.props.data.name;
        var profilepic= "../../public/images/"+this.props.data.image;
        var bio = this.props.data.bio;
        
      }
      
    return (
      <React.Fragment>
        
        <PdfContainer createPdf={this.createPdf}>
          <React.Fragment>
          
          <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src= "../images/profilepic.jpg" alt="Manish Singh Profile Pic" />
         </div>
         <div className="nine columns main-col">
            
            <div className="new">
                <h2>About Me</h2>

                <p>{bio}</p>

                
                <div className="row">
                {/* <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                            <span>{name}</span><br />
                            <span>{street}<br />
                                    {city} {state}, {zip}
                            </span><br />
                            <span>{phone}</span><br />
                                <span>{email}</span>
                     </p>
                </div> */}
            
                <div className="columns download">
                    {/* <p>
                        <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Blog</a>
                    </p> */}

                    
                </div>
        </div>    

       

            </div>
         </div>
      </div>
        
      <div id="contact">
            <div id="commentSection">
           
                    <div >
                        
                        {/* <CommentIt/> */}
                        {/* <CommentEdit/> */}
                        <CommentApp/>
                    </div>
           
            </div>
      </div>

   </section>


        
          </React.Fragment>
        </PdfContainer>
      </React.Fragment>
    );
  }
}

export default Download; 
