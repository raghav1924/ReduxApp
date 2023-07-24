import { createStoreHook } from "react-redux";
import reducers from './reducers';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store =createStoreHook(reducers,{},applyMiddleware(thunk));