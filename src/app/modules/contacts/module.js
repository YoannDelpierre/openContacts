import angular from 'angular';
import 'angular-ui-router';
import {APP_NAME} from '../../../constants';

import contactsService from './service';
import contactsTemplate from './template.html';

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
    template: contactsTemplate,
    resolve: {
      resolvedContactsLocal(contactsService) {
        return contactsService.getLocal();
      },
      resolvedContactsRemote(contactsService) {
        return contactsService.get().then(contacts => contacts);
      },
      resolvedContacts(resolvedContactsLocal, resolvedContactsRemote) {
        return resolvedContactsLocal.concat(resolvedContactsRemote);
      }
    }
  });
}
