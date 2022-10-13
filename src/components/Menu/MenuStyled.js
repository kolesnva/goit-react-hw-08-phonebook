import styled from 'styled-components';

export const MenuNav = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
`;
export const Button = styled.button`
  color: ${p => p.theme.colors.text};
  :hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.accent};
  }
`;
export const MenuLabel = styled.span`
  color: ${p => p.theme.colors.text};
`;
