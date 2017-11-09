import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import { Menu, Icon, Sidebar } from 'semantic-ui-react';

const _ = lodash;

class SideNavBar extends Component {
   constructor(props){
      super(props);

      this._handleItemClick = this._handleItemClick.bind(this);

   }

   _handleItemClick(e, { name }){
      
      this.props.history.push(name);
   }

   render(){
      const { activeItem } = this.props;

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
                  name='dock'
                  active={activeItem === 'dock'}
                  onClick={this._handleItemClick}>
                  <Icon name='anchor' />
                  Dock Sales
               </Menu.Item>

               <Menu.Item
                  name='shoppe'
                  active={activeItem === 'shoppe'} onClick={this._handleItemClick}>
                  <Icon name='home' />
                  Shoppe Sales <br/>(Coming Soon)
               </Menu.Item>

               <Menu.Item
                  name='labor'
                  active={activeItem === 'labor'} onClick={this._handleItemClick}>
                  <Icon name='address card outline' />
                  Labor
               </Menu.Item>
            </Sidebar>
         </div>
      );
   }
}

export default withRouter(SideNavBar);
