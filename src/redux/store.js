import { createStore, combineReducers } from 'redux';
import appReducer from './appReducer';
import messagesReducer from './messagesReducer';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    form: formReducer,
    appReducer,
    messagesReducer,
});

const store = createStore(reducers);

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState