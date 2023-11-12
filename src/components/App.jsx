
import { Component } from 'react';
import ContactForm from './Form/CreateContacts'
import ContactList from './ContactList'
import { nanoid } from 'nanoid'
import Filter from './Filter'
import {Sections} from './SectionStyle'
//import FeedbackOptions from './FeedbackOptions'
//import Section from './Section'
//import Statistics from './Statistics'
//import Notification from './Notification'
//import { Wrapper } from './StyleComponent'
export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    {id: 'id-5', name: 'Anniee Copelaned', number: '2227-91-26'},
  ],
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
      this.setState({filter:this.state.contacts.filter(name => name.name.toLowerCase().includes(value.toLowerCase()))})

}
  render() {
   // const druga = 
    return (
      
<Sections>
  <h1>Phonebook</h1>
 <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList contacts={this.state.filter? this.state.filter : this.state.contacts } delContact={this.delContact} />
</Sections>
  );
  };
  };