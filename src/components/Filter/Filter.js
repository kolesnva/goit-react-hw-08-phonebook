import { Label, Input, Text } from './FilterStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/Contacts/Selectors';
import { setFilter } from 'redux/Contacts/Slice';

export function Filter() {
  const dispatch = useDispatch();
  const changeFilter = event => dispatch(setFilter(event.currentTarget.value));

  return (
    <div>
      <Label>
        <Text>Find contacts by name</Text>
        <Input
          type="text"
          name="filter"
          value={useSelector(selectFilter)}
          onChange={changeFilter}
        ></Input>
      </Label>
    </div>
  );
}
