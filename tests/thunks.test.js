import * as types from '../src/Actions/actionTypes.js';
import thunkAction from '../src/Middleware/thunkMiddleware.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getData thunk', () => {
  
  it('should return a function', () => {
    //input agnostic
    const expectedReturn = 'function';
    expect(typeof thunkAction.getData('api', 'token')).toEqual(expectedReturn);
  });
});

xdescribe('mock thunk fetch', () => {
  //reset mock fetch between checks for multiple thunks
  afterEach(() => {
    fetchMock.restore()
  })
  it('creates update data when the fetch comes back clean', () => {
    //send off mock fetch
    fetchMock.getOnce('/server/getInfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api: 'api', token: 'token' }),
    })
    // .then( data => store.dispatch(actions.updateData({ data, api: 'api', token: 'token'})))
    .catch((err) => console.log(err));
    //create expected actions that will be generated
    const expectedActions = [
      { type: types.UPDATE_DATA, payload: { data: { nodeInfo: {} }} }
    ]
    //create mock store
    const store = mockStore({ data: {} })
    return store.dispatch(thunkAction.getData('api', 'token')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
describe('dispatch functionality with middleware', () => {
  //imitates the intercepting behavior of thunk middleware
  const fakeThunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
  //creates store with mock methods
  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
    const invoke = action => fakeThunk(store)(next)(action)
    return { store, next, invoke }
  }
  
  it('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  });

  it('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
  });

  it('passes dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH')
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
    expect(store.getState).toHaveBeenCalled()
  });
});
