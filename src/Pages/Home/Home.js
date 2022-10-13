import { Box } from 'Box';
import { StyledLink, Text, Title } from './HomeStyled';

function Home() {
  return (
    <Box>
      <Title>Welcome!</Title>
      <Text>
        Please <StyledLink to="/login">Log In</StyledLink> or{' '}
        <StyledLink to="/register">Sign Up</StyledLink> to continue
      </Text>
    </Box>
  );
}

export default Home;
