import React, { PropTypes } from 'react';
import HelloWorldWidget from '../components/HelloWorldWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import * as helloWorldActionCreators from '../actions/helloWorldActionCreators';

function select(state) {
  return { $$helloWorldStore: state.$$helloWorldStore };
}

const HelloWorld = (props) => {
  const { dispatch, $$helloWorldStore } = props;
  const actions = bindActionCreators(helloWorldActionCreators, dispatch);
  const { updateName } = actions;
  const name = $$helloWorldStore.get('name');
  return (
    <HelloWorldWidget {...{ updateName, name }} />
  );
};

HelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  $$helloWorldStore: PropTypes.instanceOf(Map).isRequired,
};

export default connect(select)(HelloWorld);
