import { StyledLink } from './HomeStyled';

function Home() {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>
        Please <StyledLink to="/login">Log In</StyledLink> or{' '}
        <StyledLink to="/register">Sign Up</StyledLink> to continue
      </p>
    </div>
  );
}

export default Home;
