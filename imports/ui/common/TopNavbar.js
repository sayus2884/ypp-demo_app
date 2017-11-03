import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'semantic-ui-react'

class TopNavbar extends Component {
   constructor(props){
      super(props);

      this.state = {
         isLoggedIn: Meteor.userId(),
      };

      this._handleSignOut = this._handleSignOut.bind(this);
      this._handleItemClick = this._handleItemClick.bind(this);

   }

   _handleSignOut(event){
      event.preventDefault();
      Meteor.logout(() => {
         let path = FlowRouter.path('/');
         FlowRouter.go(path);
      });
   }

   _handleItemClick(e, { name }){
      this.setState({ activeItem: name });
   }

   render(){
      const { activeItem } = this.state;

      return (
         <div>
            <Menu fixed="top" inverted>
               <Menu.Menu position="right">

                  <Menu.Item
                     name='signOut'
                     active={activeItem === 'signOut'}
                     onClick={this._handleSignOut}>
                     Sign Out
                  </Menu.Item>
               </Menu.Menu>
            </Menu>
         </div>
      );
   }
}

export default TopNavbar;
