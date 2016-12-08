export default class ContactsController {
  constructor(contacts, contactsService) {
    this.contactsService = contactsService;
    this.contacts = contacts;
    this.filter = null;
  }

  filterContacts() {
    const contactsService = this.contactsService;
    if (this.filter) {
      this.contacts = contactsService.filter(this.filter);
    } else {
      this.contacts = contactsService.contacts;
    }
  }
}
