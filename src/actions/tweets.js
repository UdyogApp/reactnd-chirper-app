import { saveLikeToggle, saveTweet } from "../utils/api";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleTweet({ id, hasLiked, authedUser }) {
  return {
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authedUser,
  };
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch((err) => {
      console.warn("Error in handleToggleTweet " + err);
      dispatch(toggleTweet(info));
      alert("Error in likin the tweet");
    });
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}

export function handleAddTweet(tweet, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveTweet({ tweet, author: authedUser, replyingTo }).then(
      (tweet) => {
        dispatch(addTweet(tweet));
      }
    );
  };
}
