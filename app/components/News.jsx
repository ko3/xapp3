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
    axios.get('http://localhost:3001/api/data/videos/news/live',
      {
        'headers':{"Access-Control-Allow-Origin": "*"}
      })
    //axios.get(encodeURI)
      .then(res => {
        this.setState({ videos:res.data.videos });
      });
      this.props.initial();
      //let encodedURI = window.encodeURI('http://localhost:3001/api/data/videos/news/live');

  }

  render() {
    return (
      <div className='home-container'>
        <h1>React</h1>
        <ul className='flex-list'>
          {this.state.videos.map(function(video, index){
            return(<li key={video.id} className='flex-item'>
              <VideoThumnail details={video}/>
            </li>)
          })}
        </ul>
        <h2>
          <div>{this.state.name}</div>
          <div>{this.state.description}</div>
          <div>{this.state.message}</div>
        </h2>
        <h4>
          <div>{this.props.active}</div>
          <div>text:{this.props.text}</div>
          <div>id:{this.props.id}</div>
          <div>status:{this.props.status}</div>
        </h4>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  active: state.name,
  text: state.text,
  id: state.id,
  status: state.completed
});

const mapDispatchToProps = (dispatch) => ({
  //initial: () => dispatch(fetchInitial(fetchNewsVideoList()))
  initial: () => {
    console.log("in news component initial")
    dispatch(fetchNewsVideoList());
    //dispatch({type:FETCH_INITIAL, data:{}});
  }
  //initial: () => dispatch(fetchInitial({data:'lgnsofiflbosboslfb'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
