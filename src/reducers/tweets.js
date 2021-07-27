import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

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

    case ADD_TWEET:
      const { tweet } = action;
      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyTo].replies.concat([tweet.id]),
          },
        };
      }
      return { ...state, [action.tweet.id]: tweet, ...replyingTo };
    default:
      return state;
  }
}
