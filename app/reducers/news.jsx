import {FETCH_INITIAL} from '../actions/News.jsx'


const initialState = {
  name: 'news',
  videos: []
};


const news = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INITIAL:
      return {
        ...state,
        videos: action.data.videos,
      }
    default:
      return state
  }
}
export default news
