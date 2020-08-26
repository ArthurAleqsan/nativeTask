import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import global from './global/global.reducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    combineReducers({
        global,

    }),
    initialState,
    compose(
        applyMiddleware(...middleware),
    )
);
export default store;