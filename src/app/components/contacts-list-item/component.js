import angular from 'angular';
import {APP_NAME} from '../../../constants';

import contactsListItemTemplate from './template.html';

export default angular.module(`${APP_NAME}.component.list.item`, [])
  .component('contactsListItem', {
    template: contactsListItemTemplate,
    bindings: {
      contact: '<'
    }
  });
