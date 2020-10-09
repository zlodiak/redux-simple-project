import { createStore, combineReducers } from 'redux';
import appReducer from './appReducer';
import messagesReducer from './messagesReducer';

let reducers = combineReducers({
    appReducer,
    messagesReducer,
});

const store = createStore(reducers);

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState