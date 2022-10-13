import styled from 'styled-components';

export const ContactText = styled.span`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const DeleteButton = styled.button`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  :hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    cursor: pointer;
  }
`;
