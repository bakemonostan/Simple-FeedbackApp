// creating a reuseable btn component
// pass props to the btn as seen below.. you can also experiment with this

// set default props as seen below also

import { PropTypes } from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
};
export default Button;
