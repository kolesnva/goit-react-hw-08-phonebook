import styled from 'styled-components';

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;
`;
export const Label = styled.label`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  justify-content: space-between;
  align-items: center;
  color: ${p => p.theme.colors.text};
`;
export const SignUpInput = styled.input`
  color: ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.space[2]}px;
`;
export const Button = styled.button`
  color: ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.space[3]}px;
  :hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
