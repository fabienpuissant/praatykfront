import { SET_CURRENT_USER, DELETE_CURRENT_USER, SET_CURRENT_USER_AUTHORISATION } from './action-types.js';

const initialState = {
    isAuthenticated: false,
    user: {},
    authorisation: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: true,
                user: action.user
            }
        case DELETE_CURRENT_USER:
            return {
                isAuthenticated: false,
                user: action.user
            }
        case SET_CURRENT_USER_AUTHORISATION:
            return {
                ...state,
                authorisation: action.authorisation
            }
        default: return state;
    }
};

export default reducer
