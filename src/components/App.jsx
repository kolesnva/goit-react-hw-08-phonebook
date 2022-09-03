import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Box } from 'Box';

const LS_KEY = 'contacts';

export function App() {
  const currentContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? currentContacts
  );
  const [filter, setFilter] = useState('');
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} already exists in contacts list.`)
      : setContacts(contacts => [newContact, ...contacts]);
  };

  const handleDeleteContact = idToRemove => {
    setContacts(contacts.filter(contact => contact.id !== idToRemove));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact}></ContactForm>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter}></Filter>
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      ></ContactsList>
    </Box>
  );
}
