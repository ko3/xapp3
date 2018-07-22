import {FETCH_INITIAL} from '../actions/News.jsx'


const initialState = {
  name: 'news'
};


const news = (state = initialState, action) => {
  console.log("in news reducer")
  console.log(action)
  console.log("data in news action")
  console.log(action.data)
  switch (action.type) {
    case FETCH_INITIAL:
      console.log('intial fetch')
      return {
        ...state,
        text: action.text,
      }
    default:
      return state
  }
}
export default news
