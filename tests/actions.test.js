import * as types from '../src/Actions/actionTypes.js';
import * as actions from '../src/Actions/actionCreator.js';
import thunkAction from '../src/Middleware/thunkMiddleware.js';


describe('updateData', () => {
  it('should create an object with data in the payload', () => {
    const infoToUpdate = { data: {}, api: 'api', token: 'token'}
    const expectedAction = {
      type: types.UPDATE_DATA,
      payload: infoToUpdate
    }
    expect(actions.updateData({}, 'api', 'token')).toEqual(expectedAction);
  });
})