import { TODOS_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    todos: []
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TODOS_FETCH_SUCCESS:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer