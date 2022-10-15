import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: baseline;
`;
export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
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
  }
  &.active {
    background-color: ${p => p.theme.colors.hover};
    border: none;
    outline: none;
  }
`;
