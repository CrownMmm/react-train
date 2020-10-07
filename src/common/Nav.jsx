import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Nav.css';

export default function Nav(props) {
  return (
    <div>
      
    </div>
  )
}

Nav.propTypes = {
  date: PropTypes.number.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isPrevDisabled: PropTypes.bool.isRequired,
  isNextDisabled: PropTypes.bool.isRequired,
};