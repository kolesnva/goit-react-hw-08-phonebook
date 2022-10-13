import { SignUpForm, Label, SignUpInput, Button } from './SignUpStyled';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/Authorization/Operations';

function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { name, email, password } = event.currentTarget.elements;
    dispatch(
      signUpUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <div>
      <SignUpForm onSubmit={handleSubmit}>
        <Label>
          Name
          <SignUpInput type="input" name="name" required />
        </Label>
        <Label>
          E-mail
          <SignUpInput type="email" name="email" required />
        </Label>
        <Label>
          Password
          <SignUpInput type="password" name="password" required />
        </Label>
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
    </div>
  );
}

export default SignUp;
