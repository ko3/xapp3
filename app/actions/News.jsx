//import $ from 'jQuery';
import axios from 'axios';

export const fetchNewsVideoList1 = () => {
  console.log("ajax call place")
  axios.get('http://localhost:3001/api/data/videos/news/live',
    {
      'headers':{"Access-Control-Allow-Origin": "*"}
    })
  //axios.get(encodeURI)
    .then(res => {
      console.log("ajax call sucess")
      console.log(res)
      return res;
    });
}

export const FETCH_INITIAL = 'FECTH_INTIAL';
export const fetchInitial = (data)=>{
  type : FETCH_INITIAL,
  data
}

export const fetchNewsVideoList = () => {
  console.log("in fetch news videos list")
  console.log("ajax call place")
  return dispatch => {
    console.log("inside first dispatcher")
    return axios.get('http://localhost:3001/api/data/videos/news/live',
      {
        'headers':{"Access-Control-Allow-Origin": "*"}
      })
      .then(res => {
        console.log("ajax call sucess")
        console.log(res)
        let data = res.data.videos;
        dispatch({type:FETCH_INITIAL, data:res.data.videos});
      })
      .catch(error=>{
        console.log(error);
      });
  }
}
