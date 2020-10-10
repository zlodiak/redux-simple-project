const messagesReducer = function messagesReducer(state = { messages: [] }, action) {
    switch(action.type) {
        case 'SET_MESSAGE': {
            state = {
                ...state,
                messages: [ ...state.messages, action.payload ],
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export const setMessageCreator = messageObj => {
    return { type: 'SET_MESSAGE', payload: messageObj }
}

export default messagesReducer;