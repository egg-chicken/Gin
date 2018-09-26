import React from 'react';
import Title from '../containers/Title';
import Invite from '../containers/Invite';
import Invited from '../containers/Invited';
import { connect } from 'react-redux';

const App = ({currentPage}) => {
  switch(currentPage) {
  case "Title":
    return <Title/>
  case "Invite":
    return <Invite/>
  case "Invited":
    return <Invited/>
  default:
    return <p>Not Found</p>
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
