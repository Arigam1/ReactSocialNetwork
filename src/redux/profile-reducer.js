const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how a u?', likesCount: 10},
        {id: 2, message: 'Hi, goood', likesCount: 1000},
        {id: 3, message: 'Yahoooo', likesCount: 500},
    ],
    newPostText: 'ARIGAMI'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };                
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
                // stateCopy.posts = [...state.posts];
                // stateCopy.posts.push(newPost);
                // stateCopy.newPostText = '';
                // return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
                // stateCopy.newPostText = action.newText;
                // return stateCopy;
        default: 
            return state;
    }   
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;