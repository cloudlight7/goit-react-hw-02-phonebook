
import { Component } from 'react';
import ContactForm from './Form/CreateContacts'
import ContactList from './ContactList'
import { nanoid } from 'nanoid'
import Filter from './Filter'
import {Sections} from './SectionStyle'
export class App extends Component {
state = {
  contacts: [],
  filter: '',
}
  addContact = (newContact) => {
    if (this.state.contacts.find(option => option.name === newContact.name)) {
      alert(`${newContact.name} is already in contact.`)
      return
   } else{
    const contactObj = {
      id:nanoid(),
      ...newContact
    }
    this.setState((prev) => ({
      contacts:[...prev.contacts, contactObj]
    }))
      }
  }
  delContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el)=>el.id !==id),
    }))
  }
  
  filter = ({ target: { value } }) => {
     this.setState({ filter: value});
  }
  contactsList = () => {
    return  this.state.contacts.filter(name => name.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  render() {
    return (
<Sections>
  <h1>Phonebook</h1>
 <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList contacts={this.contactsList()} delContact={this.delContact} />
</Sections>
  );
  };
  };