import { connect } from "react-redux";
import React, {
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import URI from 'urijs';
import dayjs from 'dayjs';
import {bindActionCreators} from 'redux';
import Header from '../common/Header.jsx';
import Detail from '../common/Detail.jsx';
import Account from './Account.jsx'
import Choose from './Choose.jsx'
import Passengers from './Passengers.jsx'
import Ticket from './Ticket.jsx'
// import Menu from './Menu.jsx'
import './App.css';
import {
  setDepartStation,
  setArriveStation,
  setTrainNumber,
  setSeatType,
  setDepartDate,
  setSearchParsed,
  fetchInitial,
  createAdult,
  createChild,
  removePassenger,
  updatePassenger,
  hideMenu,
  showGenderMenu,
  showFollowAdultMenu,
  showTicketTypeMenu,
} from './actions';
import "./App.css";

function App(props) {
  const {
    trainNumber,
    departStation,
    arriveStation,
    seatType,
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    durationStr,
    price,
    passengers,
    menu,
    isMenuVisible,
    searchParsed,
    dispatch,
  } = props;
  return (
    <div className="app"></div>
  )
}
export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
