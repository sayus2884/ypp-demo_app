import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/imports/ui/layouts/MainLayout';
import SideBarLayout from '/imports/ui/layouts/SideBarLayout';
import BlankLayout from '/imports/ui/layouts/BlankLayout';

import Home from '/imports/ui/pages/Home';
import DockSales from '/imports/ui/pages/DockSales';
import Taxes from '/imports/ui/pages/Taxes';
import ShoppeCreation from '/imports/ui/pages/ShoppeCreation';
import ShoppeSales from '/imports/ui/pages/ShoppeSales';
import Labor from '/imports/ui/pages/Labor';

FlowRouter.route('/',{
	name: 'Home',
	action: function(){
		mount( BlankLayout, {
			content: <Home />,
			topNavbar: ' '
		})
	}
});

FlowRouter.route('/dock',{
	name: 'DockSales',
	action: function(){
		mount( SideBarLayout, {
			content: <DockSales />
		})
	}
});

FlowRouter.route('/taxes',{
	name: 'Taxes',
	action: function(){
		mount( BlankLayout, {
			content: <Taxes />
		})
	}
});

FlowRouter.route('/createShoppe',{
	name: 'ShoppeCreation',
	action: function(){
		mount( BlankLayout, {
			content: <ShoppeCreation />
		})
	}
});

FlowRouter.route('/shoppe',{
	name: 'ShoppeSales',
	action: function(){
		mount( SideBarLayout, {
			content: <ShoppeSales />
		})
	}
});

FlowRouter.route('/labor',{
	name: 'Labor',
	action: function(){
		mount( SideBarLayout, {
			content: <Labor />
		})
	}
});
