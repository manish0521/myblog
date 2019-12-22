import React, { Component } from 'react'
import './Signin.css'
import Spinner from '../../Factory/Spinner/Spinner';
import formArray from './SigninConfig';
import { ValidatorForm } from 'react-material-ui-form-validator';
import ButtonClass from '../../Factory/Button/ButtonClass';
import Input from '../../Factory/Input/InputClass';
import { connect } from 'react-redux';
import { signin, handleErrorSignup } from '../../redux/action/authUserAction';
import MessageBar from '../../Factory/MessageBar/MessageBar';


class Signin extends Component {

  state = {
    formData: {
      email: '',
      password: '',
    },
    submitted: false,
  }

  componentDidMount() {
    if (this.props.authUser.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  successfullySignedUp = () => {
    this.setState({
      submitted: false,
      formData: {
        email: '',
        password: ''
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true
    }, () => {

        this.props.signin(this.state.formData)
            .then(() => {
              this.successfullySignedUp();
              this.props.history.push('/') 
            })
            .catch(error => {
              this.props.handleErrorSignup(error.response.data.message)
              this.setState({
                submitted: false
              })
            })

    });

  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  render() {

    const {submitted} = this.state;

    let form = (
      formArray.map((field, index) => {
          
        return (
          <div key={field.input.label}>
              <Input 
                {...field}
                {...this.state.formData}
                handleInputChange={this.handleChange}
              />
              <br />
          </div>
        )
      })
    ) 

    return (
      <>
        {this.props.message.serverMessage !== null ? <MessageBar 
                                        fontColorStyle={this.props.message.messageStyle.fontColorStyle}
                                        dynamicClassName={this.props.message.messageStyle.dynamicClassName}
                                        >{this.props.message.serverMessage}</MessageBar> : '' }


        <ValidatorForm className='Form' onSubmit={this.handleSubmit}>
            {
                submitted ? <Spinner /> : form
            }
            <br />
            
            <ButtonClass 
            id="nav-wrap" position="static"
              color="primary"
              variant="contained"
              type="submit"
              href="#about" 
              disabled={submitted}
              > 
              {
                  (submitted && 'Your form is submitted!')
                  || (!submitted && 'Submit')
              }
            </ButtonClass>
            
          </ValidatorForm>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    authUser: state.authUser
  }
}

export default connect(mapStateToProps, { signin, handleErrorSignup })(Signin);