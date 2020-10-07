import { connect } from "react-redux";
import React, { useCallback, useEffect, useMemo } from "react";
import "./App.css";
import Header from "../common/Header.jsx";
import Nav from "../common/Nav.jsx";
import List from "./List.jsx";
import Bottom from "./Bottom.jsx";

function App(props) {

  const onBack = () => {
    
  }

  return (
    <div>
      <div className="header-wrapper">
        <Header title="" onBack={onBack}/>
      </div>
      <Nav />
      <List />
      <Bottom />
    </div>
  );
}
export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
