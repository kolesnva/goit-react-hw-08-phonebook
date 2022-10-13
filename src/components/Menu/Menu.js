import { MenuNav, Button, MenuLabel } from './MenuStyled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/Authorization/Operations';
import { selectUser } from 'redux/Authorization/Selectors';

export function Menu() {
  const dispatch = useDispatch();

  return (
    <MenuNav>
      <MenuLabel>{useSelector(selectUser).name}</MenuLabel>
      <Button type="button" onClick={() => dispatch(logOutUser())}>
        Exit
      </Button>
    </MenuNav>
  );
}
