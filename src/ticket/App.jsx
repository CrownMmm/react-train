import { connect } from "react-redux";
import React, {
  useEffect,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from 'react';
import Detail from '../common/Detail.jsx'
import Header from '../common/Header.jsx'
import Nav from '../common/Nav.jsx'
import Candidate from './Candidate.jsx'
import Schedule from './Schedule.jsx'

import "./App.css";

function App(props) {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    departStation,
    arriveStation,
    trainNumber,
    durationStr,
    tickets,
    isScheduleVisible,
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
