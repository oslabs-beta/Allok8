import * as types from '../src/Actions/actionTypes.js';
import * as actions from '../src/Actions/actionCreator.js';
import thunkAction from '../src/Middleware/thunkMiddleware.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('getData thunk', () => {
  //reset mock fetch between checks for multiple thunks
  afterEach(() => {
    fetchMock.restore()
  })
  it('creates update data when the fetch comes back clean', () => {
    //send off mock fetch
    fetchMock.getOnce('/server/getInfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api: "api", token: "token" }),
    })
    //create expected actions that will be generated
    const expectedActions = [
      { type: types.GET_DATA },
      { type: types.UPDATE_DATA, payload: { data: { nodeInfo: {} }} }
    ]
    //create mock store
    const store = mockStore({ data: {} })
    return store.dispatch(actions.getData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})