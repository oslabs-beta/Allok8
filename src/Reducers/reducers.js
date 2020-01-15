import * as type from '../Actions/actionTypes';
import { types } from '@babel/core';

// const apiServer = '35.236.202.52';
// const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tZ3cybDkiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImRlOWZmMjI4LTJiZWItMTFlYS04MWFlLTQyMDEwYTk2MGZkZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.f371sW2bePkV3L5fdQLptzqWRUTLdZsZeTWgX4Fdr4bV2ZvBI-53UNv-o3rPZ-5tKDxX-eT-1JLIGpuIUvd6VV3odsMJnQs9kCd18SV-ksZf1acdqIccEgyISGga9D9E4lv7Fd3iIJIFbIB68eOZvHi28Z9klyjd4FTLD9tMbsC7hidcfBMAGziwoudBbPE2qz9clMkT-Sa3iNDxwRhmpzcVtSolHsKfTGuOiXYw1Low33lXPEix3vruo6OXXh06vue22f5_A8iFTCYyL_FbogNBKxNuXNHYcPYltomZHCnpvITEqt-AveO7NjFH6sJpSdL6TENlpytIseE5WtQ1jg';


const initialState = {
  api: '35.230.170.93',
  token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tbHN2a24iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImVkMGViNTNkLTMxNjUtMTFlYS05OTZlLTQyMDEwYTk2MDA3NSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.QOMQt2I6tWcojSh2702D7peJzbKa0jh-03WNborgw8C3pYne0rxVjbwk-W43sHvbwXQ5y_ku-UzFYrAmUEtWP7Xv6wik2CFTILt7K9UjJrmvEyM-WpHwlVMYSK0I7shV5mTrRJxhKSXvW2JRKflc0mt97fm0eMXlgYX_oGXv9DsAnyoMQxGxqYFsjJx8_RK-_LSXdVcRxi3Gi_aCuBqyEbrt5cEMKVyaBcJfxs0-G-_N-SMAwk878hfcBbz3BPuEMniAYEdIU9MKVMCkwSEmNIwUVmWIA4ZmltlgWIYS2ZY6EcPSdOZ9zRM4kQnaqWEGsoD-aqp5WyoE6PPQ4b-2-g',
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
    
    case type.SAVE_DATA:
      const { api, token } = action.payload;
      return ({
        ...state,
        api,
        token,
      })

    default: return { ...state };
  }
};

export default reducer;
