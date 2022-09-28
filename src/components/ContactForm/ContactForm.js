import { useState } from 'react';
import { Form, Label, Input, Text, AddButton } from './ContactFormStyled';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/ContactsListSlice';
import { getContacts } from 'redux/Selectors';
import { useSelector, useDispatch } from 'react-redux/es/exports';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = event => {
    event.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} already exists in contacts list.`);
    }

    dispatch(addContact({ id: nanoid(), name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </Label>
      <Label>
        <Text>Number</Text>
        <Input
          placeholder="+XX XXX XXX XX XX"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={event => setNumber(event.target.value)}
          value={number}
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}
