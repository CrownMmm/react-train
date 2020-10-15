import React, {
	memo,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Passengers.css';

const Passengers = memo(function Passengers() {
  return (
    <div className="passengers">
      <div>1</div>
    </div>
  );
});
export default Passengers;

Passengers.propTypes = {
	passengers: PropTypes.array.isRequired,
	updatePassenger: PropTypes.func.isRequired,
}
