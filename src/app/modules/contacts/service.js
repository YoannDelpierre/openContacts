import angular from 'angular';
import localForage from 'localforage';
import {APP_NAME, API_CONTACTS, API_RESULTS, LOCAL_NAME, ORIGIN} from '../../../constants';

const LOCAL_CONTACTS = `${LOCAL_NAME}-contacts`;

export default angular
    .module(`${APP_NAME}.contacts.service`, [])
    .service('contactsService', contactsService);

function contactsService($log, $http, Contact) {
  function toContact(contact) {
    return new Contact(contact);
  }

  return {
    get() {
      const url = `${API_CONTACTS}?results=${API_RESULTS}`;
      return $http.get(url)
        .then(contacts => contacts.data.results.map(contact => toContact(Object.assign(contact, {origin: ORIGIN.REMOTE}))));
    },

    getLocal() {
      return localForage.getItem(LOCAL_CONTACTS)
        .then(contacts => {
          if (contacts) {
            contacts.map(contact => toContact(contact, {origin: ORIGIN.LOCAL}));
          } else {
            return [];
          }
        });
    },

    save() {

    }
  };
}
