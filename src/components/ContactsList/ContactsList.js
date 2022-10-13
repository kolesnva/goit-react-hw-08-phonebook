import PropTypes from 'prop-types';
import { List, ListItem } from './ContactsListStyled';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/Contacts/Selectors';

export function ContactsList() {
  return (
    <List>
      {useSelector(selectFilteredContacts).map(({ name, id, number }) => {
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
