import angular from 'angular';
import 'angular-ui-router';

import {APP_NAME} from './constants';

import routesConfig from './routes';
import contactsModule from './app/modules/contacts/module';

import components from './app/components/index';

import './index.scss';

angular
  .module(APP_NAME, [
    'ui.router',
    contactsModule.name,
    components.name
  ])
  .config(routesConfig);
