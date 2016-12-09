import angular from 'angular';
import {values, concat} from 'lodash/fp';
import {APP_NAME, API_CONTACTS, API_RESULTS, LOCAL_NAME, ORIGIN} from '../../../constants';

const LOCAL_CONTACTS = `${LOCAL_NAME}-contacts`;

export default angular
    .module(`${APP_NAME}.contacts.service`, [])
    .service('contactsService', contactsService);

function contactsService($log, $filter, $http, Contact) {
  function toContact(contact) {
    return new Contact(contact);
  }

  return {
    contacts: [],

    get() {
      const url = `${API_CONTACTS}?results=${API_RESULTS}`;
      return $http.get(url)
        .then(contacts => contacts.data.results.map(contact => toContact(Object.assign(contact, {origin: ORIGIN.REMOTE}))))
        .catch(error => error);
    },

    getLocal() {

    },

    filter(value) {
      if (value.length > 1) {
        return $filter('filter')(this.contacts, value);
      }
    },

    merge() {
      this.contacts = values(concat(...arguments));
      return this.contacts;
    },

    add() {

    },

    save(data) {
      const contact = Object.assign(data, {
        name: {
          first: 'Yoann',
          last: 'Delpierre'
        },
        phone: '+33686106094',
        email: 'yoann.delpierre@gmail.com'
      });
    }
  };
}
