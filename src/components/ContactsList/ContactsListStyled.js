import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  margin-top: ${p => p.theme.space[3]}px;
  max-width: 50vw;
  padding: ${p => p.theme.space[5]}px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
