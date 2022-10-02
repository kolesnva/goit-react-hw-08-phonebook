import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Box } from 'Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Operations';
import { Loader } from './Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoading = state => state.contacts.isLoading;
  const error = state => state.contacts.error;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <Filter></Filter>
      {isLoading && <Loader />}
      <ContactsList></ContactsList>
    </Box>
  );
}
