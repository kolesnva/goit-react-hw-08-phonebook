import styled from 'styled-components';

export const Form = styled.form`
  width: 360px;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
`;
export const Input = styled.input`
  color: ${p => p.theme.colors.text};
  :hover {
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.secondary};
  }
`;
export const Text = styled.span`
  color: ${p => p.theme.colors.text};
`;
export const AddButton = styled.button`
  margin-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[5]}px;
  text-align: center;
  color: ${p => p.theme.colors.text};
  :hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    cursor: pointer;
  }
`;
