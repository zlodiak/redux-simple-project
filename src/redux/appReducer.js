const appReducer = function appReducer(state = {}, action) {
    switch(action.type) {
        case 'SET_VALUE': {
            state = {
                ...state,
                appText: action.appText
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export const setAppTextCreator = appText => {
    return { type: 'SET_VALUE', appText: appText }
}

export default appReducer;	