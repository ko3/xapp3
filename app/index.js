import React from'react';
import ReactDOM from'react-dom';
require('./index.css');
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer.jsx'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(rootReducer,
                applyMiddleware(
                  thunkMiddleware, // lets us dispatch() functions
                  loggerMiddleware // neat middleware that logs actions
                  )
                )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
