import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  align-content: center;
  gap: ${p => p.theme.space[7]}px;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.text};
`;
