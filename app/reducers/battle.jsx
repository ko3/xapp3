import {ADD_TODO, TOGGLE_TODO} from '../actions/battle.jsx'


const initialState = {
  name: 'naa peru siva'
};


const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    console.log(state)
    console.log("above is state; below action")
    console.log(action)
      return {
        ...state,
        id: action.id,
        text: action.text,
        completed: false,
      };
    default:
      return state
  }
}
export default todos
