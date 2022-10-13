import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/Contacts/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/Operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { ContactsList } from 'components/ContactsList/ContactsList';

function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <Error>Whoops! Something went wrong!</Error>}
      <ContactsList />
    </div>
  );
}

export default Contacts;
