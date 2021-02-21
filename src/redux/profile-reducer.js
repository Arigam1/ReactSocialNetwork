import { profileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";


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
    // stateCopy.newPostText = action.newText;
    // return stateCopy;
    default:
      return state;
  }
};

export const deletePost = (postId) => ({ type: DELETE_POST, postId });
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
  let response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resaultCode === 0) {
    dispatch(setStatus(response.data));
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
