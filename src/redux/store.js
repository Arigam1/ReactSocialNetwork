import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, how a u?', id: 1, likesCount: 10},
                {message: 'Hi, goood', id: 2, likesCount: 1000},
                {message: 'Yahoooo', id: 3, likesCount: 500},
            ],
            newPostText: 'ARIGAMI'
        },
        dialogsPage: {
            dialogs: [
                {name: "Ari", id: 1},
                {name: "Solla", id: 2},
                {name: "Marie", id: 3},
                {name: "Loli", id: 4},
                {name: "Vova", id: 5},
            ],
            messages: [
                {message: '1st', id: 1},
                {message: '2nd', id: 2},
                {message: '3rd', id: 3},
                {message: 'fff', id: 4},
                {message: '1st', id: 5},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log ('hey');
    },

    getState() {
        return this._state;
    },
    sumbscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        
        this._callSubscriber(this._state);
    }
};


export default store;