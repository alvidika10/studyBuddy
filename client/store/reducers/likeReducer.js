import { LIKES_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    likes: []
}

function likeReducer(state = initialState, action) {
    switch (action.type) {
        case LIKES_FETCH_SUCCESS:
            return {
                ...state,
                likes: action.payload
            }
        default:
            return state;
    }
}

export default likeReducer