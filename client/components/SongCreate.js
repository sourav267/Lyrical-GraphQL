import React, { Component } from "react";

export default class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  render() {
    return (
      <div>
        <h3>New Song</h3>
        <form>
          <label>Song Title:</label>
          <input
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}
