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
    abstract: true,
    resolve: {
      resolvedContactsLocal($log, contactsService) {
        return contactsService.getLocal();
      },
      resolvedContactsRemote(contactsService) {
        return contactsService.get().then(contacts => contacts);
      },
      resolvedContacts($log, contactsService, resolvedContactsLocal, resolvedContactsRemote) {
        $log.log('resolvedContactsLocal', resolvedContactsLocal);
        return contactsService.merge(resolvedContactsLocal, resolvedContactsRemote);
      }
    }
  });

  $stateProvider.state('contacts.list', {
    url: '',
    views: {
      '@': {
        controller: contactsController,
        controllerAs: 'contactsCtrl',
        template: contactsTemplate
      }
    },
    resolve: {
      contacts(contactsService) {
        return contactsService.contacts;
      }
    }
  });
}
