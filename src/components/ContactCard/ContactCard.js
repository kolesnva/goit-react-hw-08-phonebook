import propTypes from 'prop-types';
import { Text, DeleteButton } from './ContactCardStyled';

export function ContactCard({ name, number, id, handleDelete }) {
  return (
    <>
      <Text></Text>
      <Text></Text>
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
