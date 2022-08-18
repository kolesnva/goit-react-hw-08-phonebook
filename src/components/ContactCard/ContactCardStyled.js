import styled from 'styled-components';

export const ContactText = styled.span`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const DeleteButton = styled.button`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  :hover {
    background-color: ${p => p.theme.colors.secondary};
    cursor: pointer;
  }
`;
