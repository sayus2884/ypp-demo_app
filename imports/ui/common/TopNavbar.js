import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import { createDrowdownOptions } from '/imports/helpers/array';
import { setCurrentShoppe } from '/imports/actions';

const _ = lodash;

class TopNavbar extends Component {
   constructor(props){
      super(props);

      this.state = {
         isLoggedIn: Meteor.userId(),
      };

      this._handleSignOut = this._handleSignOut.bind(this);
      this._handleInputChange = props._handleInputChange.bind(this);
   }

   _handleSignOut(event){
      event.preventDefault();
      Meteor.logout(() => {
         this.props.history.push('/');
      });
   }

   render(){
      const { activeItem } = this.state;
      const { style, shoppes, currentShoppe } = this.props;

      return (
         <div>
            <Menu fixed="top" style={style}>

               <Dropdown
                  name="ocean"
                  search
                  selection
                  options={shoppes}
                  value={currentShoppe}
                  placeholder="Shoppe"
                  fluid
                  style={{ border: 'none' }}
                  onChange={this._handleInputChange}
                  />

               <Menu.Item
                  name='signOut'
                  active={activeItem === 'signOut'}
                  onClick={this._handleSignOut}>
                  Sign Out
               </Menu.Item>
            </Menu>
         </div>
      );
   }
}

const mapDispatchToProp = dispatch => {
   return {
      _handleInputChange(event, { name, value }) {
         dispatch(setCurrentShoppe(value));
      },
   }
}

export default withRouter(connect(state => {
   const { allShoppes, currentShoppe, loading } = state;

   if (!loading) {

      const shoppeOptions = createDrowdownOptions(allShoppes, { key: 'name' }, {
         textOption: (text) => _.startCase(text)
      });

      return {
         shoppes: shoppeOptions,
         currentShoppe: parseInt(currentShoppe)
      };
   }

   return { shoppes:[] }
}, mapDispatchToProp )(TopNavbar));
