import { getInitialData } from "../utils/api";
import { setAuthenticatedUser } from "./authedUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
//import { showLoading, hideLoading } from "react-redux-loading-bar";
const authenticatedUser = "tylermcginnis";
//Curring Pattern Action Creator and API Call
export function handleInitialData() {
  return (dispatch) => {
    // dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthenticatedUser(authenticatedUser));
      // dispatch(hideLoading());
    });
  };
}
