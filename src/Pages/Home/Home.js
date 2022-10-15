import {
  StyledLink,
  Text,
  Title,
  Container,
  BookIconContainer,
} from './HomeStyled';
import { BsBook } from 'react-icons/bs';

function Home() {
  return (
    <Container>
      <Title>Welcome!</Title>
      <BookIconContainer>
        <BsBook size={256} />
      </BookIconContainer>
      <Text>
        Please <StyledLink to="/login">Log In</StyledLink> or{' '}
        <StyledLink to="/register">Sign Up</StyledLink> to continue!
      </Text>
    </Container>
  );
}

export default Home;
