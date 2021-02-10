import { profileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how a u?", likesCount: 10 },
    { id: 2, message: "Hi, goood", likesCount: 1000 },
    { id: 3, message: "Yahoooo", likesCount: 500 },
  ],
  newPostText: "ARIGAMI",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    // stateCopy.newPostText = action.newText;
    // return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resaultCode === 0) {
      dispatch(setStatus(response.data));
    }
  });
};



// export const unfollow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     usersAPI.unfollow(userId).then((response) => {
//       if (response.data.resultCode == 0) {
//         dispatch(unfollowSuccess(userId));
//       }
//       dispatch(toggleFollowingProgress(false, userId));
//     });
//   };
// };

// usersAPI.setProfile(userId).then((response) => {
//   this.props.setUserProfile(response.data);
// });

export default profileReducer;
