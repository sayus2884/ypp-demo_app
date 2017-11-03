import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Container, Grid, Header, Segment, Form, Button, Divider } from 'semantic-ui-react'
import SignUp from './SignUp';
import { SEO } from '/imports/api/seo';

const _ = lodash

class SignIn extends Component {

   constructor(props){
      super(props);

      this.state = {
         email: '',
         password: ''
      };

      this._handleSignIn = this._handleSignIn.bind(this);
      this._handleSignUp = this._handleSignUp.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
   }

   _handleSignIn(event){
      event.preventDefault();

      const { email, password } = this.state;

      Meteor.loginWithPassword(email, password, (err, res) => {
         if (!err){
            const path = FlowRouter.path('DockSales')
            FlowRouter.go(path)
         }
      });
   }

   _handleSignUp(event){
      event.preventDefault();

      const { email, password } = this.state;
      const credentials = { email, password }

      Accounts.createUser(credentials, function(err){
         let path = FlowRouter.path('ShoppeCreation');
         FlowRouter.go(path);
      });

      return false;
   }

   _handleInputChange(event, { name, value }){
      this.setState({ [name]: value });
   }

   render(){
      const { email, password } = this.state;

      return (
         <div>
            <Grid
               textAlign='center'
               verticalAlign='middle'
               >
               <Grid.Column style={{ maxWidth: 450 }}>
                  <Segment>
                     <Header as="h2">Sign In</Header>
                     <Form size="large" onSubmit={this._handleSignIn}>
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
                        <Button type='submit' primary fluid size="large">Sign In</Button>
                     </Form>

                     <Divider horizontal>Or</Divider>

                     <Button type='button' basic fluid size="large" onClick={this._handleSignUp}>Sign Up</Button>

                  </Segment>
               </Grid.Column>
            </Grid>
         </div>
      );
   }

}

export default SignIn;
