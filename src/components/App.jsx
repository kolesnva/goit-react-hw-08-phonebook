import { Component } from 'react';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
};
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact = ({ name }) => {
    const { contacts } = this.state;
    const id = nanoid();
  };

  render() {
    return (
      <>
        <Formik initialValues={initialValues} onSubmit={this.handleAddContact}>
          <Form autoComplete="off">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <button type="submit">Add to contacts</button>
          </Form>
        </Formik>
      </>
    );
  }
}
