import { combineReducers } from "redux";
import amountManuplater from "./amountManuplater";

const reducers= combineReducers({
    amount:amountManuplater
})

export default reducers;