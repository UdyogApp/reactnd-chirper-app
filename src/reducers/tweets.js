import { RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(
                  (item) => item != action.authedUser
                )
              : state[action.id].likes.concat([action.authedUser]),
        },
      };
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    default:
      return state;
  }
}
