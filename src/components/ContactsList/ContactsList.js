import PropTypes from 'prop-types';
import { List, ListItem } from './ContactsListStyled';
import { ContactCard } from 'components/ContactCard/ContactCard';

export function ContactsList({ contacts, handleDelete }) {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            <ContactCard
              id={id}
              name={name}
              number={number}
              handleDelete={handleDelete}
            ></ContactCard>
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
  handleDelete: PropTypes.func.isRequired,
};
