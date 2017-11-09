import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Container, Grid, Header, Segment, Form, Button, Divider } from 'semantic-ui-react'

const _ = lodash

class SignUp extends Component {

   constructor(props){
      super(props);

      this.state = {
         email: '',
         password: '',
         confirmPassword: '',
      };

      this._handleSignUp = this._handleSignUp.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
   }

   _handleSignUp(event){
      event.preventDefault();

      const { email, password } = this.state;
      const credentials = { email, password }

      Accounts.createUser(credentials, function(err){

         let path = FlowRouter.path('DockSales');
         FlowRouter.go(path);
      });

      return false;
   }

   _handleInputChange(event, { name, value }){
      this.setState({ [name]: value });
   }

   render(){
      const { email, password, confirmPassword } = this.state;

      return (
         <div>
            <Header as="h2">Sign Up</Header>
            <Form size="large" onSubmit={this._handleSignUp}>
               <Form.Input
                  name="email"
                  value={email}
                  onChange={this._handleInputChange}
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  />

               <Form.Input
                  name="password"
                  value={password}
                  onChange={this._handleInputChange}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  />

               <Form.Input
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this._handleInputChange}
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirm Password'
                  type='password'
                  />
               <Button type='submit' basic fluid size="large">Sign Up</Button>
            </Form>
         </div>
      );
   }
}

export default SignUp;
