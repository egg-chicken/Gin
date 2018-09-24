import React, { Component } from 'react';
import Title from '../containers/Title';
import Invite from '../components/Invite';
import { connect } from 'react-redux';

const App = ({currentPage}) => {
  switch(currentPage) {
    case "Invite":
      return <Invite/>
    case "Title":
      return <Title/>
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