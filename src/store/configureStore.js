import { createStore, combineReducers } from 'redux'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'

const configureStore = () => {
    const state = createStore(combineReducers({
        user: userReducer,
        posts : postsReducer
    }))
    return state
}

export default configureStore