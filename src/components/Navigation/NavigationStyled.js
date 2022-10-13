import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  justify-content: center;
  align-items: baseline;
`;
export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  display: flex;
  align-items: baseline;
  align-content: center;
  color: ${p => p.theme.colors.text};
  gap: ${p => p.theme.space[1]}px;
  :hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.accent};
  }
`;
