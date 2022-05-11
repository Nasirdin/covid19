import {combineReducers} from "redux";
import covid from './covidReducer';

const rootReducer = () => combineReducers({covid});

export default rootReducer;