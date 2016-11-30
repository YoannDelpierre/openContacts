import angular from 'angular';
import 'angular-ui-router';
import {APP_NAME} from '../../constants';

import contactsService from '../services/contacts';

export default angular.module(`${APP_NAME}.contacts`, [
  'ui.router',
  contactsService.name
])
.config(contactsModuleConfig);

/**
 * @ngInject
 */
function contactsModuleConfig($stateProvider) {
  $stateProvider.state('contacts', {
    url: '/contacts',
    resolve: {
      resolvedContacts($log, contactsService) {
        return contactsService.get().then(contacts => {
          $log.log('contacts', contacts);
        });
      }
    }
  });
}
