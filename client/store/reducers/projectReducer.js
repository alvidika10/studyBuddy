import {
  PROJECTS_FETCH_SUCCESS,
  PROJECT_FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  projects: [],
  project: [],
};

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECTS_FETCH_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };
    case PROJECT_FETCH_SUCCESS:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
}

export default projectReducer;
