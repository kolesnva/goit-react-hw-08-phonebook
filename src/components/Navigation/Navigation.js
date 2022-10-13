import { NavMenu, NavItem } from './NavigationStyled';
import { BsFillArrowRightCircleFill, BsFillPencilFill } from 'react-icons/bs';

export function Navigation() {
  return (
    <NavMenu>
      <NavItem to="/login">
        <BsFillArrowRightCircleFill size={13} /> Log In
      </NavItem>
      <NavItem to="/register">
        <BsFillPencilFill size={13} />
        Sign Up
      </NavItem>
    </NavMenu>
  );
}
