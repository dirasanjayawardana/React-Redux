import { combineReducers } from "redux";
import { createStore } from 'redux';
import counterReducer from "./reducers/counter";
import userReducer from "./reducers/user";


const allReducers = combineReducers({
    counter: counterReducer,
    user: userReducer,
})

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store