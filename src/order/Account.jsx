import React, { memo } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import './Account.css';

const Account = memo(function Account() {
  return (
    <div className="account">
      <div>1</div>
    </div>
  );
});
export default Account;

Account.propTypes = {
  price: PropTypes.number,
  length: PropTypes.number.isRequired,
};
