import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import  {addTodo} from '../actions/battle.jsx'

class Ko3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition:false,
      name: 'ko3',
      description:'ko3, newbie to react',
      message: 'Hello, this is ko3'
    };
  }

  render() {
    return (<div>
      {this.state.condition?<Redirect to="/popular" />:
      <div className= 'home-container'>
        <h1>React Router Tutorial</h1>
        <h2>
          <div>This is all state data</div>
          <div>{this.state.name}</div>
          <div>{this.state.description}</div>
          <div>{this.state.message}</div>
        </h2>
        <h4>
          <div>This is all props data</div>
          <div>{this.props.active}</div>
          <div>text:{this.props.text}</div>
          <div>id:{this.props.id}</div>
          <div>status:{this.props.status}</div>
          <button
            className='button'
            type='submit'
            onClick={this.props.onClick}>
              button to run through redux
          </button>
        </h4>
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
    );
  }
};

const mapStateToProps = (state) => ({
  active: state.name,
  text: state.text,
  id: state.id,
  status: state.completed
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(addTodo('dispatch text'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ko3);
