import angular from 'angular';
import {APP_NAME} from '../../../constants';

import contactsListItemTemplate from './template.html';

export default angular.module(`${APP_NAME}.component.list.item`, [])
  .component('contactsListItem', {
    controller: contactsListItemController,
    controllerAs: 'contactsListItemCtrl',
    template: contactsListItemTemplate,
    bindings: {
      contact: '<'
    }
  });

// @ngInject
function contactsListItemController() {
  const ctrl = this;

  this.$onChanges = function (changes) {
    if (changes.contact) {
      this.contact = Object.assign({}, changes.contact.currentValue);
    }
  };

  ctrl.open = function () {
    // open a panel
  };
}
