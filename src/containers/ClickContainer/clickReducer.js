import { INCREMENT, DECREMENT } from './constant';


export const initialState = {
  counter: 0,
  step: 1,
  min: 0,
  max: 99999,
};

export default function homeContainerReducer(state = initialState, action) {

  switch (action.type) {
    case INCREMENT:

      state = Increment(state);

      return {
        ...state,
        counter: state.counter,
      };
    case DECREMENT:
      state = Increment(state, false);

      return {
        ...state,
        counter: state.counter,
      };
    default:
      return state;
  }
}

/**
 * ********************************************************
 * @param {*} state :  initialState
 * @param {*} action True = + false = - 
 * @returns state
 */
export function Increment(state, action = true) {

  let incrStep = (action) ? state.step : state.step * -1;

  if (state.counter + incrStep > state.max)
    state.counter = state.max;
  else if (state.counter + incrStep <= state.min)
    state.counter = state.min;
  else
    state.counter += incrStep;


  return state;
}
