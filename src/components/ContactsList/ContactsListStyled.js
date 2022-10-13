import styled from 'styled-components';

export const List = styled.ul`
  text-align: center;
  list-style: none;
  padding: ${p => p.theme.space[0]}px; ;
`;
export const ListItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
`;
