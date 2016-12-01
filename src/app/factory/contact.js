import angular from 'angular';
import {APP_NAME} from '../../constants';

/**
 * @ngInject
 */
function ContactFactory() {
  class Contact {
    constructor(data) {
      Object.assign(this, data || {});
    }
  }
  return Contact;
}

export default angular.module(`${APP_NAME}.contacts.factory`, [])
  .factory('Contact', ContactFactory);
