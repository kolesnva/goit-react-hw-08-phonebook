import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Text, AddButton } from './ContactFormStyled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = { onSubmit: PropTypes.func.isRequired };

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form>
        <Label>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInput}
            value={this.state.name}
          />
        </Label>
        <Label>
          <Text>Number</Text>
          <Input
            placeholder="+XX XXX XXX XX XX"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInput}
            value={this.state.number}
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
  }
}
