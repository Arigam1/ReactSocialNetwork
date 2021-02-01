const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {message: 'Hi, how a u?', id: 1, likesCount: 10},
        {message: 'Hi, goood', id: 2, likesCount: 1000},
        {message: 'Yahoooo', id: 3, likesCount: 500},
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