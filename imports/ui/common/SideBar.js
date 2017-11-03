import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Icon, Sidebar } from 'semantic-ui-react'

const _ = lodash;

class SideNavBar extends Component {
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

      let path = FlowRouter.path(name);
      FlowRouter.go(path);
   }

   render(){
      const { activeItem } = this.state;

      return (
         <div>
            <Sidebar
               as={Menu}
               compact
               icon='labeled'
               fixed="left"
               visible
               size="tiny"
               vertical>

               <Menu.Item
                  name='DockSales'
                  active={activeItem === 'commodities'}
                  onClick={this._handleItemClick}>
                  <Icon name='anchor' />
                  Dock Sales
               </Menu.Item>

               <Menu.Item
                  name='ShoppeSales'
                  active={activeItem === 'shoppeSales'} onClick={this._handleItemClick}>
                  <Icon name='home' />
                  Shoppe Sales <br/>(Coming Soon)
               </Menu.Item>

               <Menu.Item
                  name='Labor'
                  active={activeItem === 'labor'} onClick={this._handleItemClick}>
                  <Icon name='address card outline' />
                  Labor
               </Menu.Item>
            </Sidebar>
         </div>
      );
   }
}

export default SideNavBar;
