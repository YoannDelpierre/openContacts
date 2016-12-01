import angular from 'angular';
import localForage from 'localforage';
import {APP_NAME, API_CONTACTS, API_RESULTS, LOCAL_NAME} from '../../../constants';

const LOCAL_CONTACTS = `${LOCAL_NAME}-contacts`;

export default angular
    .module(`${APP_NAME}.contacts.service`, [])
    .service('contactsService', contactsService);

function contactsService($http) {
  return {
    get() {
      const url = `${API_CONTACTS}?results=${API_RESULTS}`;
      return $http.get(url)
        .then(contacts => contacts.data.results);
    },

    getLocal() {
      return localForage.getItem(LOCAL_CONTACTS)
        .then(contacts => contacts || []);
    },

    save() {

    }
  };
}
