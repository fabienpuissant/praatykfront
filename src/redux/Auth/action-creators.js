
import { SET_CURRENT_USER, DELETE_CURRENT_USER, SET_CURRENT_USER_AUTHORISATION } from './action-types'
import { ACCESS_TOKEN } from "../../constants/token"

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function deleteCurrentUser() {
    localStorage.removeItem(ACCESS_TOKEN);
    return {
        type: DELETE_CURRENT_USER,
    }
}

export function setUserAuthorisation(authorisation) {
    return {
        type: SET_CURRENT_USER_AUTHORISATION,
        authorisation
    }
}




