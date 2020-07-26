import { combineReducers } from 'redux';
import questions from './question';

const rootReducer = combineReducers({
    questions: questions
})

export default rootReducer;