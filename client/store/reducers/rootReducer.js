import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import ratingReducer from './ratingReducer'
import reviewReducer from './reviewReducer'
import categoryReducer from './categoryReducer'
import likeReducer from './likeReducer'
import specialistReducer from './specialistReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    userReducer,
    projectReducer,
    ratingReducer,
    reviewReducer,
    categoryReducer,
    likeReducer,
    specialistReducer,
    todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store