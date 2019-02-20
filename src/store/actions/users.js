import * as actionTypes from './actionTypes';


export const getUsers = (userID) => {
    return {
        type: actionTypes.GET_USER,
        payload: { userID }
    };
};


export const updateUser = (userData) => {
    return {
        type: actionTypes.UPDATE_USER,
        payload: { userData }
    }
}

