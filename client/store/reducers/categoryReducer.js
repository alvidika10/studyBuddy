import { CATEGORIES_BY_NAME_FETCH_SUCCESS, CATEGORIES_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    categories: [],
    categoriesByName: []
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_FETCH_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case CATEGORIES_BY_NAME_FETCH_SUCCESS:
            return {
                ...state,
                categoriesByName: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer