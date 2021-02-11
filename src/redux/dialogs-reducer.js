const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { name: "Ari", id: 1 },
        { name: "Solla", id: 2 },
        { name: "Marie", id: 3 },
        { name: "Loli", id: 4 },
        { name: "Vova", id: 5 },
    ],
    messages: [
        { message: '1st', id: 1 },
        { message: '2nd', id: 2 },
        { message: '3rd', id: 3 },
        { message: 'fff', id: 4 },
        { message: '1st', id: 5 },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { message: body, id: 6 }]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;