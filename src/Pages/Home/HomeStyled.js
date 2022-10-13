import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  :hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.accent};
  }
`;
export const Text = styled.p`
  color: ${p => p.theme.colors.text};
`;
export const Title = styled.h2`
  color: ${p => p.theme.colors.text};
`;
