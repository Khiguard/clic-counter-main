import { INCREMENT, DECREMENT } from './constant';


export const initialState = {
  counter: 0,
  step: 1, 
  min : 0,
  max : 9999999,
};

export default function homeContainerReducer(state = initialState, action) {
//export default function clickContainerReducer(state = initialState, action) {
  let result = state.counter;

  switch (action.type) {
    case INCREMENT:
    
     if (state.counter< state.max)
      result+= state.step;
     

      return {
        ...state,
         counter:  result, 
      };   
      case DECREMENT:
        if (state.counter> state.min)
          result-= state.step;
         
    
        return {
          ...state,
           counter: result,
        };   
    default:
      return state;
  }
}
