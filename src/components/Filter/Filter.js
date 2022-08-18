import PropTypes from 'prop-types';
import { Label, Input, Text } from './FilterStyled';
import { Box } from 'Box';

export function Filter({ value, onChange }) {
  return (
    <Box>
      <Label>
        <Text>Find contacts by name</Text>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        ></Input>
      </Label>
    </Box>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
