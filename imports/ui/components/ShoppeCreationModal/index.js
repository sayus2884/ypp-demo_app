import React, { Component } from 'react';
import { Container, Header, Grid, Modal, Icon, Menu } from 'semantic-ui-react';
import ShoppeCreationForm from './ShoppeCreationForm';

class ShoppeCreationModal extends Component {
   constructor(props){
      super(props);

      this.state = { modalOpen: false };

      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
   }

   handleOpen(){ this.setState({ modalOpen: true })}

   handleClose(){ this.setState({ modalOpen: false })}

   render(){
      return (
         <Modal
            trigger={<Menu.Item onClick={this.handleOpen} name='plus'><Icon name='plus' /></Menu.Item>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            >
            <Modal.Header>Creating a New Shoppe</Modal.Header>
            <Modal.Content>
               <Modal.Description>
                  <ShoppeCreationForm handleClose={this.handleClose}/>
               </Modal.Description>
            </Modal.Content>
         </Modal>
      )
   }
}

export default ShoppeCreationModal;
