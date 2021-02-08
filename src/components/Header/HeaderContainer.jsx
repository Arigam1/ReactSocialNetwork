import React from "react";
import * as axios from "axios";
import Header from "./Header";
// import { setAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
// import { usersAPI } from "../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
