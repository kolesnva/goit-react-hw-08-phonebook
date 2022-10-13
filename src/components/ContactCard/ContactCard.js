import PropTypes from 'prop-types';
import { ContactText, DeleteButton } from './ContactCardStyled';
import { deleteContact } from 'redux/Contacts/Operations';
import { useDispatch } from 'react-redux';

export function ContactCard({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <ContactText>{name}</ContactText>
      <ContactText>{number}</ContactText>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
