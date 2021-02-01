const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {message: body, id: 6}]
            };

        default: 
            return state;
    }   
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
    
export default dialogsReducer;