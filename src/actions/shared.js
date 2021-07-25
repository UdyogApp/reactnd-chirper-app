import { getInitialData } from "../utils/api";
import { setAuthenticatedUser } from "./authedUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

const authenticatedUser="tylermcginnis"
//Curring Pattern Action Creator and API Call 
export function handleInitialData(){
    return(dispatch)=>{
     return getInitialData.then(({users,tweets})=>{
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(setAuthenticatedUser(authenticatedUser));
     })
    }
}