import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userData: [],
};

const updateUserList = (state, action) => {
    console.log("updateUserList" , action)
    return updateObject(state, { userData: action.payload.userData.data })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER: return updateUserList(state, action);
        default:
            return state;
    }
};

export default reducer;