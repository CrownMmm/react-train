import React, { memo } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Ticket.css";

const Ticket = memo(function Ticket(props) {
  const { price, type } = props;
  return (
    <div className="ticket">
      <p>
        <span className="ticket-type">{type}</span>
        <span className="ticket-price">{price}</span>
      </p>
      <div className="label">坐席</div>
    </div>
  );
});
export default Ticket;

Ticket.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string.isRequired,
};
