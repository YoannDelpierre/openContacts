import angular from 'angular';
import {APP_NAME} from '../../../constants';

import contactsListTemplate from './template.html';

export default angular.module(`${APP_NAME}.component.list`, [])
  .component('contactsList', {
    controller: contactsListController,
    controllerAs: 'contactsListCtrl',
    template: contactsListTemplate,
    bindings: {
      contacts: '<'
    }
  });

function contactsListController($log) {
  this.$onChanges = function (changes) {
    if (changes.contacts) {
      $log.log(changes);
      this.contacts = Object.assign(changes.contacts.currentValue);
    }
  };
}
