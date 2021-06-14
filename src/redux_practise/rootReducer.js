import { combineReducers } from 'redux';
import postsReducer from '../gifsReducer';

const rootReducer = combineReducers({
    data: postsReducer,
});

export default rootReducer;