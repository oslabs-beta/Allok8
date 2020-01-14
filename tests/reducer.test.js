const curlReducer = require('./src/Reducers/reducers.js');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

  it('should dispatch actions of ConstantA and ConstantB', () => {
    const expectedActions = [
      {type: CONSTANT_A, payload: 'a'},
      {type: CONSTANT_B, payload: 'b'} 
    ]

    const store = mockStore({ yourInitialState })
    store.dispatch(actions.functionA('a', 'b'))

    expect(store.getActions()).toEqual(expectedActions)
  })
})


describe('curlReducer', () => {
  let startState;
  const fakeAction = { type: 'NOT_A_REAL_ACTION' };

  beforeEach(() => {
     startState = {
      api: '35.230.170.93',
      token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tbHN2a24iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImVkMGViNTNkLTMxNjUtMTFlYS05OTZlLTQyMDEwYTk2MDA3NSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.QOMQt2I6tWcojSh2702D7peJzbKa0jh-03WNborgw8C3pYne0rxVjbwk-W43sHvbwXQ5y_ku-UzFYrAmUEtWP7Xv6wik2CFTILt7K9UjJrmvEyM-WpHwlVMYSK0I7shV5mTrRJxhKSXvW2JRKflc0mt97fm0eMXlgYX_oGXv9DsAnyoMQxGxqYFsjJx8_RK-_LSXdVcRxi3Gi_aCuBqyEbrt5cEMKVyaBcJfxs0-G-_N-SMAwk878hfcBbz3BPuEMniAYEdIU9MKVMCkwSEmNIwUVmWIA4ZmltlgWIYS2ZY6EcPSdOZ9zRM4kQnaqWEGsoD-aqp5WyoE6PPQ4b-2-g',
      page: 'LANDING',
      data: {},
    };
  });

  it('should provide a default state', () => {
    const result = curlReducer(undefined, fakeAction);
    expect(result).toEqual( { api: '35.230.170.93',
    token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tbHN2a24iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImVkMGViNTNkLTMxNjUtMTFlYS05OTZlLTQyMDEwYTk2MDA3NSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.QOMQt2I6tWcojSh2702D7peJzbKa0jh-03WNborgw8C3pYne0rxVjbwk-W43sHvbwXQ5y_ku-UzFYrAmUEtWP7Xv6wik2CFTILt7K9UjJrmvEyM-WpHwlVMYSK0I7shV5mTrRJxhKSXvW2JRKflc0mt97fm0eMXlgYX_oGXv9DsAnyoMQxGxqYFsjJx8_RK-_LSXdVcRxi3Gi_aCuBqyEbrt5cEMKVyaBcJfxs0-G-_N-SMAwk878hfcBbz3BPuEMniAYEdIU9MKVMCkwSEmNIwUVmWIA4ZmltlgWIYS2ZY6EcPSdOZ9zRM4kQnaqWEGsoD-aqp5WyoE6PPQ4b-2-g',
    page: 'LANDING',
    data: {},});
  });

  it('should return the same state object for unrecognized actions', () => {
    const result = curlReducer(startState, fakeAction);
    expect(result).toBe(startState);
  });

  describe('UPDATE_DATA', () => {
    let action = { type: 'UPDATE_DATA' };

    it('should return an object as data', () => {
      const result = curlReducer(startState, action);
      expect(result).toHaveProperty('data', {});
    });

    it('should return a new state object', () => {
      const result = curlReducer(startState, action);
      expect(result).toBeTruthy();
      expect(result).not.toBe(startState);
    });

    it('should return a valid data object and not an error object', () => {
      const result = curlReducer(startState, action);
      expect(result.data).toHaveProperty(nodeInfo, {})
    })
  });
});
