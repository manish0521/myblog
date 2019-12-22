import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';


class Header extends Component {
    
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    

    return (
      <header id="home">

          

      <div id="nav-wrap" position="static">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            {/* <li>
            <Button variant="outlined"   href="#about"  style={{color:"skyblue",fontSize:"16px", fontWeight:"bold"}}>
                    About
            </Button>
            </li> */}
	         {/* <li>
                 <Button variant="outlined"  href="#resume"  style={{backgroundColor: "rgb(233, 117, 8)", color: "rgb(124, 11, 11)", fontSize:"16px", fontWeight:"bold"}} >
                    Resume
                </Button>
            </li> */}
            <li>
                <Button variant="contained"  color="primary" href="#portfolio" style={{fontSize:"16px",fontWeight:"bold"}      }>
                    Portfolio
                </Button></li>
                
            <li>
                <Button variant="outlined"   href="#contact" style={{color:"grey", fontSize:"16px", fontWeight:"bold"}}>
                    Contact
                </Button></li>
         </ul>
 
      </div>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}



export default Header;
