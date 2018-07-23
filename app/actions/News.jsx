import $ from 'jquery';
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

// export const fetchNewsVideoList = () => {
//   return dispatch => {
//     return $.getJSON('http://localhost:3001/api/data/videos/news/live')
//       .done(res =>{
//         console.log(res)
//           console.log("res.data")
//           console.log(res.data)
//         dispatch({type:FETCH_INITIAL, data:res.data})
//       })
//       .fail(error=>{
//         console.log(error)
//       });
//   }
// }

export const fetchNewsVideoList = () => {
  return dispatch => {
    return axios.get('http://localhost:3001/api/data/videos/news/live')
      .then(res => {
        console.log(res)
        dispatch({type:FETCH_INITIAL, data:res.data});
      })
      .catch(error=>{
        console.log(error);
      });
  }
}
