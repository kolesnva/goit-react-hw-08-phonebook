import styled from 'styled-components';
export const Title = styled.h2`
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
`;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: ${p => p.theme.space[6]}px;
  max-width: 50vw;
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[5]}px;
`;
export const SignUpForm = styled.form`
  display: inline-block;
  text-align: center;
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
export const SignUpInput = styled.input`
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
export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.sm};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  background-color: ${p => p.theme.colors.buttonBackground};
  color: ${p => p.theme.colors.background};
  border: none;
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
    border: none;
    outline: none;
    cursor: pointer;
  }
  &.active {
    background-color: ${p => p.theme.colors.hover};
    border: none;
    outline: none;
  }
`;
