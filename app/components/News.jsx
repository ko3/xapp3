import React from 'react';
import {connect} from 'react-redux';
import  {addTodo} from '../actions/battle.jsx';

class News extends React.Component {
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
    return (
      <div className= 'home-container'>
        <h1>React Router Tutorial</h1>
        <h2>
          <div>{this.state.name}</div>
          <div>{this.state.description}</div>
          <div>{this.state.message}</div>
        </h2>
        <h4>
          <div>{this.props.active}</div>
          <div>text:{this.props.text}</div>
          <div>id:{this.props.id}</div>
          <div>status:{this.props.status}</div>
        </h4>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
