import angular from 'angular';

import 'angular-ui-router';
import {APP_NAME} from './constants';

import routesConfig from './routes';

import contactsModule from './app/modules/contacts';

import './index.scss';

angular
  .module(APP_NAME, [
    'ui.router',
    contactsModule.name
  ])
  .config(routesConfig);
