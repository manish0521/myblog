import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

// import Header from './Header';

import About from './About';
// import Resume from './Resume';
import Contact from './Contact';
import Testimonials from './Testimonials';
// import Portfolio from './Portfolio';
import Footer from './Footer';


class Blog extends Component {
    
  render() {

    

    return (
      <header id="home">
          

      <div id="nav-wrap" position="static">


         <ul id="nav" className="nav">
            <li>
            <Button variant="outlined"   href="#about"  style={{color:"skyblue",fontSize:"16px", fontWeight:"bold"}}>
                    About
            </Button>
            </li>
	         
            <li>
                <Button variant="outlined"   href="#contact" style={{color:"grey", fontSize:"16px", fontWeight:"bold"}}>
                    Contact
                </Button></li>
         </ul>
 
      </div>

      

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}



export default Blog;
