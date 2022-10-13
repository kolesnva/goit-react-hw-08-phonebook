import { LoginForm, Label, LoginInput, Button } from './LoginStyled';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/Authorization/Operations';
import { Box } from 'Box';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    dispatch(logInUser({ email: email.value, password: password.value }));
    event.currentTarget.reset();
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit}>
        <Label>
          E-mail
          <LoginInput type="email" name="email" required />
        </Label>
        <Label>
          Password
          <LoginInput type="password" name="password" required />
        </Label>
        <Button type="submit">Log In</Button>
      </LoginForm>
    </div>
  );
}
export default Login;
