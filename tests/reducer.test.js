import curlReducer from '../src/Reducers/reducers.js';

describe('curlReducer', () => {
  let startState;
  const fakeAction = { type: 'NOT_A_REAL_ACTION' };

  beforeEach(() => {
     startState = {
      api: '',
      token: '',
      page: 'LANDING',
      data: {},
      selected: {},
      view: 'Cards',
    };
  });

  xit('should provide a default state', () => {
    const result = curlReducer(undefined, fakeAction);
    expect(result).toEqual( { api: '',
    token: '',
    page: 'LANDING',
    data: {},
    selected: {},
    view: 'Cards',
    });
  });

  it('should return the same state object for unrecognized actions', () => {
    const result = curlReducer(startState, fakeAction);
    expect(result).toBe(startState);
  });

  describe('UPDATE_DATA', () => {
    let action = { type: 'UPDATE_DATA', payload: { api: 'api', token: 'token', data: { nodeInfo: 'nodeInfo' } } };

    it('should return an object as data', () => {
      const result = curlReducer(startState, action);
      expect(result).toHaveProperty('data', { nodeInfo: 'nodeInfo' });
    });

    it('should return a new state object', () => {
      const result = curlReducer(startState, action);
      expect(result).toBeTruthy();
      expect(result).not.toBe(startState);
    });

  });

  describe('SAVE_DATA', () => {
    let action = { type: 'SAVE_DATA', payload: { api: 'diffApi', token: 'diffToken'} };

    it('should return a new value for api and token', () => {
      const result = curlReducer(startState, action);
      expect(result).toHaveProperty('api', 'diffApi');
      expect(result).toHaveProperty('token', 'diffToken');
    });

    it('should return a new state object', () => {
      const result = curlReducer(startState, action);
      expect(result).toBeTruthy();
      expect(result).not.toBe(startState);
    });
  });

  describe('GOTO', () => {
    let action = { type: 'GOTO', payload: 'location' };

    it('should return a new value for page', () => {
      const result = curlReducer(startState, action);
      expect(result).toHaveProperty('page', 'location');
    });

    it('should return a new state object', () => {
      const result = curlReducer(startState, action);
      expect(result).toBeTruthy();
      expect(result).not.toBe(startState);
    });
  });

  xdescribe('SELECT', () => {
    let action = { type: 'SELECT', payload: { selected: 'someValue'} };

    it('should return a new value for selected', () => {
      const result = curlReducer(startState, action);
      expect(result).toHaveProperty(selected, 'someValue');
    });

    it('should return a new state object', () => {
      const result = curlReducer(startState, action);
      expect(result).toBeTruthy();
      expect(result).not.toBe(startState);
    });
  });

  describe('CHANGE_VIEW', () => {
    let action = { type: 'CHANGE_VIEW', payload: 'view' };

    it('should return a new value for view', () => {
      const result = curlReducer(startState, action);
      expect(result).toHaveProperty('view', 'view');
    });

    it('should return a new state object', () => {
      const result = curlReducer(startState, action);
      expect(result).toBeTruthy();
      expect(result).not.toBe(startState);
    });
  });
});
