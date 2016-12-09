import angular from 'angular';
import lockr from 'lockr';
import {values, concat} from 'lodash/fp';
import {APP_NAME, API_CONTACTS, API_RESULTS, LOCAL_NAME, ORIGIN, DEFAULT_CONTACT_OBJECT} from '../../../constants';

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
      const contacts = this.retrieveLocal();
      return contacts.map(contact => toContact(contact));
    },

    retrieveLocal() {
      const contacts = lockr.get(LOCAL_CONTACTS) || [];
      return contacts;
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

    add(data) {
      const contact = Object.assign(DEFAULT_CONTACT_OBJECT, data);
      $log.log('contact add', contact);

      // add to contacts from localStorage
      this.save(contact);

      // add to current collection
      this.contacts.unshift(toContact(contact));
    },

    save(contact) {
      const contacts = this.retrieveLocal();
      contacts.unshift(contact);
      lockr.set(LOCAL_CONTACTS, contacts);
    }
  };
}
