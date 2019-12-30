import * as type from '../Actions/actionTypes.js';


const initialState = {
  bool: false,
  payload: null
}

const reducer = (state = initialState, action) => {
  //check to make sure we get a payload
  if (!action.payload) return state;
  switch (action.type) {
    //initial test case to make sure redux is working
    case type.FLIP_BOOL:
      //do some work
      const flipped = !state.bool
      return ({
          ...state,
          bool : flipped,
          payload: action.payload
        })
    default: return state;
  }
}

export default reducer;