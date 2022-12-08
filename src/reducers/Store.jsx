import { legacy_createStore as createStore, applyMiddleware} from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import Reducer from "./Reducer";

import logger from "redux-logger";

import thunk from 'redux-thunk'

const store = createStore(Reducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store