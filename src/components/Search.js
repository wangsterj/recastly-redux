import React from 'react';

// var Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//     this.handleSearchInputChange = this.props.handleSearchInputChange.bind(this)
//   }

// // handleInputChange(e) {
// //   this.props.getYouTubeVideos(e.target.value);
// //   this.setState({
// //     value: e.target.value
// //   });
// // }

// render() {
//   return (
//     <div className="search-bar form-inline">
//       <input
//         className="form-control"
//         type="text"
//         value={this.state.value}
//         onChange={(e) => this.handleSearchInputChange(e.target.value)}
//       />
//       <button className="btn hidden-sm-down">
//         <span className="glyphicon glyphicon-search"></span>
//       </button>
//     </div>
//   );
// }
// }
var Search = ({ handleSearchInputChange }) => {
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={(event) => handleSearchInputChange(event.target.value)}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}

export default Search;
