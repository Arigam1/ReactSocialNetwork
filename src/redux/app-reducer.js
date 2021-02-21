import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCSESS = "INITIALIZED_SUCCSESS";

let initialState = {
    initialized: false
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCSESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCSESS });


export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    //dispatch(someelse)
    //dispatch(someelse)
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
};

// export const login = (email, password, rememberMe, isAuth) => (dispatch) => {
//     authAPI.login(email, password, rememberMe, isAuth).then((response) => {
//         if (response.data.resultCode === 0) {
//             dispatch(getAuthUserData());
//         } else {
//             let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
//             dispatch(stopSubmit('login', { _error: message }))
//         }
//     });
// };

// export const logout = () => {
//     return (dispatch) => {
//         authAPI.logout().then((response) => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false));
//             }
//         });
//     };
// };

export default appReducer;
