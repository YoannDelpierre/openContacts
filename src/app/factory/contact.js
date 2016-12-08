import angular from 'angular';
import {APP_NAME} from '../../constants';

function ContactFactory() {
  class Contact {
    constructor(data) {
      const {name: {first, last}, email, phone, location} = data;
      const formattedName = [first, last].join(' ');
      const address = Object.keys(location).map(key => location[key]).join(' ');
      const resume = Object.assign({}, {
        formattedName,
        email,
        phone,
        address
      });

      Object.assign(this, resume);
    }
  }

  return Contact;
}

export default angular.module(`${APP_NAME}.contacts.factory`, [])
  .factory('Contact', ContactFactory);
