import angular from 'angular';
import {APP_NAME} from '../../../constants';

import contactsListTemplate from './template.html';

export default angular.module(`${APP_NAME}.component.list`, [])
  .component('contactsList', {
    template: contactsListTemplate,
    bindings: {
      contacts: '<'
    }
  });
