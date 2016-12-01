import angular from 'angular';
import {APP_NAME} from '../../constants';

import contactsListComponents from './contacts-list/component';
import contactsListItemComponents from './contacts-list-item/component';

export default angular.module(`${APP_NAME}.component`, [
  contactsListComponents.name,
  contactsListItemComponents.name
]);
