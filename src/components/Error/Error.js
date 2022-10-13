import PropTypes from 'prop-types';

export function Error({ children }) {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
}

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
