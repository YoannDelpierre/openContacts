import angular from 'angular';
import {APP_NAME, API_CONTACTS, API_RESULTS} from '../../constants';

export default angular
    .module(`${APP_NAME}.contacts.service`, [])
    .service('contactsService', contactsService);

function contactsService($log, $http) {
  return {
    get() {
      const url = `${API_CONTACTS}?results=${API_RESULTS}`;
      return $http.get(url)
        .then(contacts => contacts.data.results);
    },

    save() {

    }
  };
}
