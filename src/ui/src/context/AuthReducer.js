// AuthReducer.js //

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './Types';

export default (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        return {
            ...state,
            user: action.payload,
        };
        case LOGIN_FAIL:
        case LOGOUT:
        return {
            ...state,
            user: null,
        };
        default:
        return state;
    }
    }
