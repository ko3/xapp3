import React from 'react';
import {connect} from 'react-redux';

class VideoThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (<div>
              <div>{this.props.details.videoName}</div>
              <img
                className='thumbnail'
                src={this.props.details.vidoeThumbnail.medium.url}
                alt={'Avatar for '}
              />
              <div>{this.props.details.videoLink}</div>
            </div>
    );
  }
};


export default VideoThumbnail;
