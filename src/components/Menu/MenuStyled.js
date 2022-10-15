import styled from 'styled-components';

export const MenuNav = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-content: center;
  align-items: center;
`;
export const Button = styled.button`
  background-color: ${p => p.theme.colors.background};
  border: none;
  display: block;
  padding: ${p => p.theme.space[4]}px;
  &:hover,
  :focus {
    color: ${p => p.theme.colors.hover};
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
export const MenuLabel = styled.span`
  display: block;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[4]}px;
`;
