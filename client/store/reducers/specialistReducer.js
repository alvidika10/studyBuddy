import { SPECIALIST_BY_ID_FETCH_SUCCESS, SPECIALIST_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    specialists: [],
    specialist: null
}

function specialistReducer(state = initialState, action) {
    switch (action.type) {
        case SPECIALIST_FETCH_SUCCESS:
            return {
                ...state,
                specialists: action.payload
            }
        case SPECIALIST_BY_ID_FETCH_SUCCESS:
            return {
                ...state,
                specialist: action.payload
            }
        default:
            return state;
    }
}

export default specialistReducer