import { STUDENT_PROFILE_FETCH_SUCCESS, BUDDY_PROFILE_FETCH_SUCCESS, USERS_FETCH_SUCCESS, USER_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    studentProfile: {},
    buddyProfile: null,
    users: [],
    user: null
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case STUDENT_PROFILE_FETCH_SUCCESS:
            return {
                ...state,
                studentProfile: action.payload
            }
        case BUDDY_PROFILE_FETCH_SUCCESS:
            return {
                ...state,
                buddyProfile: action.payload
            }
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer