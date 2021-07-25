import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "./logger";
import { loadingBarMiddleware } from "react-redux-loading-bar";

export default applyMiddleware(logger, thunk);
