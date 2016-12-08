import angular from 'angular';
import {APP_NAME} from '../../constants';

/**
 * @ngInject
 */
function ContactFactory() {
  class Contact {
    constructor(data) {
      Object.assign(this, data || {});

      const {name: {first, last}, email, phone} = this;
      const formattedName = [first, last].join(' ');

      this.resume = Object.assign({}, {
        formattedName,
        email,
        phone
      });
    }
  }

  return Contact;
}

export default angular.module(`${APP_NAME}.contacts.factory`, [])
  .factory('Contact', ContactFactory);
