import { StyledLink, Text, Title } from './HomeStyled';

function Home() {
  return (
    <div>
      <Title>Welcome!</Title>
      <Text>
        Please <StyledLink to="/login">Log In</StyledLink> or{' '}
        <StyledLink to="/register">Sign Up</StyledLink> to continue
      </Text>
    </div>
  );
}

export default Home;
