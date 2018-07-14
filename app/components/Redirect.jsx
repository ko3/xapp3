var React = require('react');
var Link = require('react-router-dom').Link;

class Redirect extends React.Component {
    render() {
    return (
      <div className= 'home-container'>
        <h1>React Router DOM Links</h1>
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/popular">popular</Link></li>
        </ul>
      </div>
    )
  }

}

module.exports = Redirect;
