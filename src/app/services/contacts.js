import angular from 'angular';
import {APP_NAME, API_CONTACTS, API_RESULTS} from '../../constants';

export default angular
    .module(`${APP_NAME}.contacts.service`, [])
    .service('contactsServices', contactsServices);

function contactsServices($http) {
  return {
    get() {
      const url = `${API_CONTACTS}?results=${API_RESULTS}`;
      return $http(url)
        .then(contacts => contacts);
    },

    save() {

    }
  };
}
