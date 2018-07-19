import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Battle from './Battle.jsx';
import Popular from './Popular.jsx';
import Results from './Results.jsx';
import Redirect from './Redirect.jsx';
import Ko3 from './Ko3.jsx';
import News from './News.jsx';

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
            <Route path='/ko3' component={Ko3} />
            <Route path='/News' component={News} />
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
