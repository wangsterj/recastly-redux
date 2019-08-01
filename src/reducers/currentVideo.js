import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  if (action.type === "CHANGE_VIDEO") {
    let currentVideo = action.video;
    return currentVideo;
  } else {
    return state;
  }
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
