import {
  LoginForm,
  Label,
  LoginInput,
  Button,
  Container,
  Title,
} from './LoginStyled';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/Authorization/Operations';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    dispatch(logInUser({ email: email.value, password: password.value }));
    event.currentTarget.reset();
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Please enter your credentials.</Title>
        <Label>
          E-mail:
          <LoginInput type="email" name="email" required />
        </Label>
        <Label>
          Password:
          <LoginInput type="password" name="password" required />
        </Label>
        <Button type="submit">Log In</Button>
      </LoginForm>
    </Container>
  );
}
export default Login;
