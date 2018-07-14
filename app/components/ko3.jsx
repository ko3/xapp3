var React = require('react');
var Link = require('react-router-dom').Link;
var Redirect = require('react-router-dom').Redirect;

export default class ko3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition:false,
    };
  }

  render() {
    return (<div>
      {this.state.condition?<Redirect to="/popular" />:
      <div className= 'home-container'>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/redirect">Redirect</Link></li>
        </ul>
        <button
          className='button'
          type='submit'
          onClick={()=>{this.setState({condition:true})}}>
            Activate Redirect
        </button>
      </div>}</div>
    )
  }
}
