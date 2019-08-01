import React from 'react';


class Search extends React.Component {

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          // value={this.state.value}
          // onChange={this.handleInputChange.bind(this)}
          onChange={(event) => this.props.handleInputChange(event.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
