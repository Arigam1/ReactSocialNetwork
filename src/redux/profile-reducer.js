import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


let initialState = {
  posts: [
    { id: 1, message: "Hi, how a u?", likesCount: 10 },
    { id: 2, message: "Hi, goood", likesCount: 1000 },
    { id: 3, message: "Yahoooo", likesCount: 500 },
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      debugger
      return { ...state, profile: { ...state.profile, photos: action.photos } }
    // stateCopy.newPostText = action.newText;
    // return stateCopy;
    default:
      return state;
  }
};

export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    alert('не повезло)))')
  }
};

export const savePhoto = (file) => async (dispatch) => {

  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;

  let response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
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
