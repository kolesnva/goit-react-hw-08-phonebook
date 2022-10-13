import styled from 'styled-components';

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;
export const Input = styled.input`
  :hover {
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal};
    color: ${p => p.theme.colors.text};
    border-color: ${p => p.theme.colors.secondary};
  }
`;
export const Text = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
`;
