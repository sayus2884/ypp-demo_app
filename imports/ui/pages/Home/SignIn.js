import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Container, Grid, Header, Segment, Form, Button, Divider } from 'semantic-ui-react';
import SignUp from './SignUp';

import { setUser } from '/imports/actions';


const _ = lodash

class SignIn extends Component {

   constructor(props){
      super(props);

      this.state = {
         email: '',
         password: ''
      };

      this._handleSignIn = props._handleSignIn.bind(this);
      this._handleSignUp = props._handleSignUp.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
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

const mapStateToProp = state => {
   return {};
}

const mapDispatchToProp = dispatch => {
   return {
      _handleSignIn(event) {
         event.preventDefault();

         const { email, password } = this.state;

         Meteor.loginWithPassword(email, password, (err, res) => {
            if (!err){
               dispatch(setUser(Meteor.user()));
               this.props.history.push('/dock');
            }
         });
      },

      _handleSignUp(event){
         event.preventDefault();

         const { email, password } = this.state;
         const credentials = { email, password }

         Accounts.createUser(credentials, (err) => {
            this.props.history.push('/createShoppe');
         });

         return false;
      }
   }
}

export default withRouter(connect( state => {return {}}, mapDispatchToProp)(SignIn));
