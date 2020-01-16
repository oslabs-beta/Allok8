import * as types from '../src/Actions/actionTypes.js';
import * as actions from '../src/Actions/actionCreator.js';

describe('updateData', () => {
  it('should create an object with data in the payload', () => {
    const infoToUpdate = { data: {}, api: 'api', token: 'token'}
    const expectedAction = {
      type: types.UPDATE_DATA,
      payload: infoToUpdate,
    }
    expect(actions.updateData({}, 'api', 'token')).toEqual(expectedAction);
  });
});

describe('saveData', () => {
  it('should pass the api and token to the thunk middleware', () => {
    const payload = { api: 'api', token: 'token' };
    const expectedAction = {
      type: types.SAVE_DATA,
      payload,
    }
    expect(actions.saveData('api', 'token')).toEqual(expectedAction);
  });
});

describe('GOTO', () => {
  it('should pass a string of which page to render', () => {
    const payload = 'page';
    const expectedAction = {
      type: types.GOTO,
      payload,
    }
    expect(actions.goTo('page')).toEqual(expectedAction);
  });
});
