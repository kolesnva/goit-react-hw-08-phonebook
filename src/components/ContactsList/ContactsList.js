import PropTypes from 'prop-types';
import { List, ListItem } from './ContactsListStyled';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/Selectors';

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const normalizedFilter = useSelector(getFilter).toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            <ContactCard id={id} name={name} number={number}></ContactCard>
          </ListItem>
        );
      })}
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
