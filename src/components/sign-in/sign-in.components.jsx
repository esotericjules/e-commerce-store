import React, {Component} from 'react';
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    
    const { email, password} = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: "", password: ""})
    } catch (error){
      // console.log(error);
    }
    
    
  };
  
  handleChange = event => {
    const {value, name} = event.target;
    
    this.setState({[name]: value})
  }
  
  signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }
  
  render() {
    return (
      <div className={"sign-in"}>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
  
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label={"email"}
            type="email"
            name={"email"}
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label={"password"}
            type="password"
            name={"password"}
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" >Sign in</CustomButton>
            <CustomButton type="button" onClick={(e) => this.signInWithGoogle(e)} isGoogleSignIn>Sign in with google</CustomButton>
          </div>
        
        </form>
      </div>
    );
  }
}

export default SignIn;