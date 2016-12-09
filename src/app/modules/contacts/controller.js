export default class ContactsController {
  constructor($log, contacts, contactsService) {
    this.$log = $log;

    this.contactsService = contactsService;
    this.contacts = contacts;

    this.contact = {};
    this.filter = null;
  }

  createContact() {
    const contact = this.contact;
    this.contactsService.save(contact);
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
