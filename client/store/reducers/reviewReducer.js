import { REVIEWS_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    reviews: []
}

function reviewReducer(state = initialState, action) {
    switch (action.type) {
        case REVIEWS_FETCH_SUCCESS:
            return {
                reviews: action.payload
            }
        default:
            return state;
    }
}

export default reviewReducer