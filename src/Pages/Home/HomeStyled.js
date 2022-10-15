import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BookIconContainer = styled.div`
  display: block;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.black};

  &:hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.buttonBackground};
  }
`;
export const Text = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Container = styled.div`
  padding: ${p => p.theme.space[5]}px;
  text-align: center;
`;
