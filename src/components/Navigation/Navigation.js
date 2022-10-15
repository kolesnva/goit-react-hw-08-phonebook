import { NavMenu, NavItem } from './NavigationStyled';

export function Navigation() {
  return (
    <NavMenu>
      <NavItem to="/login"> Log In</NavItem>
      <NavItem to="/register">Sign Up</NavItem>
    </NavMenu>
  );
}
