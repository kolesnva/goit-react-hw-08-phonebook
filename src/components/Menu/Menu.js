import { MenuNav, Button, MenuLabel } from './MenuStyled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/Authorization/Operations';
import { selectUser } from 'redux/Authorization/Selectors';
import { BsFillDoorOpenFill } from 'react-icons/bs';

export function Menu() {
  const dispatch = useDispatch();

  return (
    <MenuNav>
      <MenuLabel>Hello, {useSelector(selectUser).name}</MenuLabel>
      <Button type="button" onClick={() => dispatch(logOutUser())}>
        <BsFillDoorOpenFill size={12} />
        Exit
      </Button>
    </MenuNav>
  );
}
