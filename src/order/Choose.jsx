import React, {
	memo,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Choose.css';

const Choose = memo(function Choose() {
  return (
    <div className="choose">
      <div>1</div>
    </div>
  );
});
export default Choose;

Choose.propTypes = {
	passengers: PropTypes.array.isRequired,
	updatePassenger: PropTypes.func.isRequired,
}
