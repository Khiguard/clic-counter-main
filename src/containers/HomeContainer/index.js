import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Home from '../../views/Home';

import { useInjectReducer } from '../../utils/injectReducer';

//--------Old
//import { incrementAction } from './action';
//import { decrementAction } from './action';
//import { makeSelectHomeContainerCounter } from './selector';
//import reducer from './reducer';





//--------UPDATE
import { incrementAction } from '../ClickContainer/clickAction';
import { decrementAction } from '../ClickContainer/clickAction';
import { makeSelectHomeContainerCounter } from '../ClickContainer/selector';

import reducer from '../ClickContainer/clickReducer';



const key = 'homeContainer';

function HomeContainer(props) {
  useInjectReducer({ key, reducer });

  return (<Home {...props} />);
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectHomeContainerCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomeContainer);

