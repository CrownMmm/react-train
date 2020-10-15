import React, {
	memo,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Ticket.css';

const Ticket = memo(function Ticket() {
  return (
    <div className="ticket">
      <div>1</div>
    </div>
  );
});
export default Ticket;

Ticket.propTypes = {
	price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	type: PropTypes.string.isRequired,
}
