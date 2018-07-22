import React from 'react';
import {connect} from 'react-redux';
import  {FETCH_INITIAL, fetchInitial, fetchNewsVideoList} from '../actions/News.jsx';
import VideoThumnail from './VideoThumbnail';
import axios from 'axios';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition:false,
      name: 'ko3',
      description:'ko3, newbie to react',
      message: 'Hello, this is ko3',
      videos:[]
    };
  }

  componentDidMount(){
    this.props.initial();
  }

  render() {
    return (
      <div className='home-container'>
        <h1>React from props</h1>
        <ul className='flex-list'>
          {this.props.videos.map(function(video, index){
            return(<li key={video.id} className='flex-item'>
              <VideoThumnail details={video}/>
            </li>)
          })}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  videos: state.news.videos
});

const mapDispatchToProps = (dispatch) => ({
  initial: () => dispatch(fetchNewsVideoList())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
