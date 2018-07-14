import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import Router from 'ReactRouter.BrowserRouter'
//import Route from 'ReactRouter.Route'
//import Switch from 'ReactRouter.Switch'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Battle from './Battle.jsx'
import Popular from './Popular.jsx'
import Results from './Results.jsx'
import Redirect from './Redirect.jsx'
import ko3 from './ko3.jsx'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className= 'container'>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route path='/redirect' component={Redirect} />
            <Route path='/ko3' component={ko3} />
            <Route render={function(){
                return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
