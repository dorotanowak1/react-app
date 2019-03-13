import React from "react";

class NewQuote extends React.Component {
  state = {
    value: undefined
  };
  getQuote = async e => {
    e.preventDefault();

    const apiCall = await fetch(`https://api.chucknorris.io/jokes/random`);
    const quote = await apiCall.json();
    console.log(quote);
    this.setState({ value: quote.value });
  };
  render() {
    return (
      <div>
        <button onClick={this.getQuote}> New Quote </button>
        <h4> {this.state.value} </h4>
      </div>
    );
  }
}

export default NewQuote;
