import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Container, Grid, Header, Segment, Form, Button, Divider, Checkbox, Input } from 'semantic-ui-react'
import { SHOPPE_COMMODITIES, LABOR, SHOPPES, OCEANS } from '/imports/helpers';
import { createDrowdownOptions } from '/imports/helpers/array';
import { toConstantCase } from '/imports/helpers/strings';

const _ = lodash

class ShoppeCreationForm extends Component {

   constructor(props){
      super(props);

      this.state = {
         ocean: 'obsidian',
         island: `devil's heart`,
         type: 'iron monger',
         name: '',
         willUseShoppeType: true
      };

      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleCheckbox = this._handleCheckbox.bind(this);
      this._handleShoppeCreation = this._handleShoppeCreation.bind(this);
   }

   _handleShoppeCreation(){
      const { ocean, island, type, name, willUseShoppeType } = this.state;
      const data = _.assign({}, {
         commodities: SHOPPE_COMMODITIES[toConstantCase(type)],
         ocean, island, type, owner: Meteor.userId(), createdAt: _.now(),
         name: willUseShoppeType ? `${_.startCase(name)}'s ${_.startCase(type)}` : name,
         labor: LABOR
      });

      Meteor.call('shoppes.createShoppe', data, () => {
         this.props.history.push('/dock');
      });
   }

   _handleInputChange(event, { name, value }){
      this.setState({ [name]: value });
   }

   _handleCheckbox(event, { name, checked }){
      this.setState({ [name]: checked })
   }

   render(){
      const { ocean, island, type, name, willUseShoppeType } = this.state;
      const oceanOptions = createDrowdownOptions(OCEANS, { key: 'name', value: 'name'}, {
         textOption: (text) => _.startCase(text)
      });
      const islandOptions = createDrowdownOptions(_.find(OCEANS, { name: ocean}).islands, { key: 'name', value: 'name' }, {
         textOption: (text) => _.startCase(text)
      });
      const shoppeOptions = createDrowdownOptions(SHOPPES, { key: 'name', value: 'name' }, {
         textOption: (text) => _.startCase(text)
      });

      const attr = {
         label: { basic: true, content: `'s ${_.startCase(type)}` },
         labelPosition: 'right'
      };

      return (
         <div>
            <Form onSubmit={this._handleShoppeCreation}>
               <Form.Dropdown
                  name="ocean"
                  value={ocean}
                  search
                  selection
                  options={oceanOptions}
                  onChange={this._handleInputChange}
                  placeholder='Ocean'
                  />

               <Form.Dropdown
                  name="island"
                  value={island}
                  search
                  selection
                  options={islandOptions}
                  onChange={this._handleInputChange}
                  placeholder='Island'
                  />

               <Form.Dropdown
                  name="type"
                  value={type}
                  search
                  selection
                  options={shoppeOptions}
                  onChange={this._handleInputChange}
                  placeholder='Shoppe Type'
                  />

               <Form.Field>
                  <Input
                     name="name"
                     value={name}
                     onChange={this._handleInputChange}
                     fluid
                     placeholder='Shoppe Name'
                     { ...willUseShoppeType ? attr : {} }
                     />
               </Form.Field>

               <Form.Checkbox label='Use shoppe type in name' name="willUseShoppeType" checked={willUseShoppeType} onChange={this._handleCheckbox}/>

               <Button type='submit' primary fluid size="large">Create Shoppe</Button>
            </Form>
         </div>
      );
   }
}

export default withRouter(ShoppeCreationForm);
