import PropTypes from 'prop-types';
import { ContactText, DeleteButton } from './ContactCardStyled';

export function ContactCard({ name, number, id, onDeleteContact }) {
  return (
    <>
      <ContactText>{name}</ContactText>
      <ContactText>{number}</ContactText>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButton>
    </>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
