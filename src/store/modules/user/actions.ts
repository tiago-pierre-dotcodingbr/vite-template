// js
import { LOGOUT, UPDATE_USER, UPDATE_TOKEN } from './constants';
import { AppDispatch } from '../../index';

// actions
export const logoutAuth: AppDispatch = () => (dispatch: AppDispatch) => {
    dispatch({
        type: LOGOUT,
    });
};

export const updateUser: AppDispatch =
    (user: any) => (dispatch: AppDispatch) => {
        dispatch({
            type: UPDATE_USER,
            payload: user,
        });
    };

export const updateToken: AppDispatch =
    (token: any) => (dispatch: AppDispatch) => {
        dispatch({
            type: UPDATE_TOKEN,
            payload: token,
        });
    };
