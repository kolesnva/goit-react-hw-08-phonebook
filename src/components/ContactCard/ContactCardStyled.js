import styled from 'styled-components';

export const ContactText = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};
`;
export const DeleteButton = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  background-color: ${p => p.theme.colors.buttonBackground};
  color: ${p => p.theme.colors.background};
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
