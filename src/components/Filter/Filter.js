import { Label, Input, Text } from './FilterStyled';
import { Box } from 'Box';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getFilter } from 'redux/Selectors';
import { setFilter } from 'redux/ContactsListSlice';

export function Filter() {
  const dispatch = useDispatch();
  const changeFilter = event => dispatch(setFilter(event.currentTarget.value));

  return (
    <Box>
      <Label>
        <Text>Find contacts by name</Text>
        <Input
          type="text"
          name="filter"
          value={useSelector(getFilter)}
          onChange={changeFilter}
        ></Input>
      </Label>
    </Box>
  );
}
