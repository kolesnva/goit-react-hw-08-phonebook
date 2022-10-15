import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: ${p => p.theme.space[3]}px;
  max-width: 50vw;
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[5]}px;
`;
export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};
`;
export const Input = styled.input`
  outline: none;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.md};
  border: 1px solid #0b89d5;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  &:hover,
  :focus {
    border: 2px solid #0078bf;
  }
`;
