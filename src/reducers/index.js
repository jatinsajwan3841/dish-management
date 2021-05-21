import { combineReducers } from "redux";
import dishlist from "./dishlist";
import logstate from "./logstate"

const rootReducer = combineReducers({
    dishlist,
    logstate
});

export default rootReducer;