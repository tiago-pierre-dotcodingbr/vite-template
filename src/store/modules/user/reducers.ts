// libraries
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

// js
import { LOGOUT, UPDATE_USER, UPDATE_TOKEN } from './constants';

const initialState = {
    user: null,
    token: null,
};

const handlers = {
    [LOGOUT]: () => initialState,
    [UPDATE_USER]: (state = initialState, action: AnyAction) => {
        const user = action.payload;
        return { ...state, user };
    },
    [UPDATE_TOKEN]: (state = initialState, action: AnyAction) => {
        const token = action.payload;
        return { ...state, token };
    },
};

export default handleActions(handlers, initialState);
