import propTypes from 'prop-types';
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
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  handleDelete: propTypes.func.isRequired,
};
