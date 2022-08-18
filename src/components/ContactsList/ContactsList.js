import propTypes from 'prop-types';
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

ContactsList.prototypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
