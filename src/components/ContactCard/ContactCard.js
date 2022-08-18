import PropTypes from 'prop-types';
import { ContactText, DeleteButton } from './ContactCardStyled';

export function ContactCard({ name, number, id, handleDelete }) {
  return (
    <>
      <ContactText>{name}</ContactText>
      <ContactText>{number}</ContactText>
      <DeleteButton type="button" onClick={() => handleDelete(id)}>
        Delete
      </DeleteButton>
    </>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
