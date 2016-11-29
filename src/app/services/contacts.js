import angular from 'angular';
import {APP_NAME, API_CONTACTS} from '../../constants';

export default angular
    .module(`${APP_NAME}.contactsServices`, [])
    .service('contactsServices', contactsServices);

function contactsServices($http) {
  return {
    get() {
      const url = `${API_CONTACTS}?results=500`;
      return $http(url)
        .then(contacts => contacts);
    },

    save() {

    }
  };
}
