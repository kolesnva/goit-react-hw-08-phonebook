import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Box } from 'Box';

export function App() {
  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactsList></ContactsList>
    </Box>
  );
}
