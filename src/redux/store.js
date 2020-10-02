import { createStore, combineReducers } from 'redux';
import appReducer from './appReducer';

let reducers = combineReducers({
    appReducer
});

const store = createStore(reducers);

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState