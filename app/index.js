var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/battle.jsx'

const store = createStore(todos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
