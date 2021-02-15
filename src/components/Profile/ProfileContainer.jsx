import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authoraizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {

    return <Profile {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authoraizedUserId: state.auth.userId,
});


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(
//   WithUrlDataContainerComponent
// );

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter,
)(ProfileContainer);