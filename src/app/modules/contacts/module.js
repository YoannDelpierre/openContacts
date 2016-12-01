import angular from 'angular';
import 'angular-ui-router';
import {APP_NAME} from '../../../constants';

import contactsService from './service';
import contactsTemplate from './template.html';
import contactsController from './controller';

import contactFactory from '../../factory/contact';

export default angular.module(`${APP_NAME}.contacts`, [
  'ui.router',
  contactsService.name,
  contactFactory.name
])
.config(contactsModuleConfig);

/**
 * @ngInject
 */
function contactsModuleConfig($stateProvider) {
  $stateProvider.state('contacts', {
    url: '/contacts',
    controller: contactsController,
    controllerAs: 'contactsCtrl',
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
