import { RATINGS_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    ratings: []
}

function ratingReducer(state = initialState, action) {
    switch (action.type) {
        case RATINGS_FETCH_SUCCESS:
            return {
                ...state,
                ratings: action.payload
            }
        default:
            return state;
    }
}

export default ratingReducer