import React from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";
class NewTweet extends React.Component {
  state = {
    text: "",
    toHome: false,
  };

  handleChange = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;
    dispatch(handleAddTweet(text, id));
    console.log(text);

    this.setState(() => ({
      text: "",
      toHome: id ? false : true,
    }));
  };

  render() {
    const { text, toHome } = this.state;
    const tweetLeft = 280 - text.length;
    if (toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            placeholder="What's happening?"
            value={this.state.text}
            onChange={this.handleChange}
            className="textarea"
            maxLength="280"
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {}

export default connect()(NewTweet);
