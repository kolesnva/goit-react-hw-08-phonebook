import { Label, Input, Text } from './FilterStyled';
import { Box } from 'Box';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/Contacts/Selectors';
import { setFilter } from 'redux/Contacts/Slice';

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
          value={useSelector(selectFilter)}
          onChange={changeFilter}
        ></Input>
      </Label>
    </Box>
  );
}
