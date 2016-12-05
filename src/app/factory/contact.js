import angular from 'angular';
import {APP_NAME} from '../../constants';

/**
 * @ngInject
 */
function ContactFactory() {
  class Contact {
    constructor(data) {
      Object.assign(this, data || {});

      const {name: {first, last}} = this;
      this.formattedName = [first, last].join(' ');
    }
  }

  return Contact;
}

export default angular.module(`${APP_NAME}.contacts.factory`, [])
  .factory('Contact', ContactFactory);
