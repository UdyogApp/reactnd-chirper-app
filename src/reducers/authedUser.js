import { SET_AUTHENTICATED_USER } from "../actions/authedUser";

export default function authedUser(state=null,action){
    switch(action.type){
        case SET_AUTHENTICATED_USER:
            return action.id;
        default:
            return state;    
    }
}