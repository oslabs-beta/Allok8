import * as type from '../Actions/actionTypes';


const initialState = {
  api: '',
  token: '',
  page: 'LANDING',
  data: {},
};

const reducer = (state = initialState, action) => {
  // check to make sure we get a payload
  if (!action.payload) return state;

  switch (action.type) {
    // initial test case to make sure redux is working
    case type.UPDATE_DATA:

      return ({
        ...state, api: action.payload.api, token: action.payload.token, data: action.payload.data, page: 'DASHBOARD',
      });

    default: return state;
  }
};

export default reducer;
