import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Box } from 'Box';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem(LS_KEY);
    if (storageContacts) {
      this.setState({ contacts: JSON.parse(storageContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} already exists in contacts list.`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  handleDeleteContact = idToRemove => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== idToRemove),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact}></ContactForm>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        ></ContactsList>
      </Box>
    );
  }
}
