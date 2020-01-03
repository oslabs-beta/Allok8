import * as type from '../Actions/actionTypes';

// const apiServer = '35.236.202.52';
// const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tZ3cybDkiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImRlOWZmMjI4LTJiZWItMTFlYS04MWFlLTQyMDEwYTk2MGZkZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.f371sW2bePkV3L5fdQLptzqWRUTLdZsZeTWgX4Fdr4bV2ZvBI-53UNv-o3rPZ-5tKDxX-eT-1JLIGpuIUvd6VV3odsMJnQs9kCd18SV-ksZf1acdqIccEgyISGga9D9E4lv7Fd3iIJIFbIB68eOZvHi28Z9klyjd4FTLD9tMbsC7hidcfBMAGziwoudBbPE2qz9clMkT-Sa3iNDxwRhmpzcVtSolHsKfTGuOiXYw1Low33lXPEix3vruo6OXXh06vue22f5_A8iFTCYyL_FbogNBKxNuXNHYcPYltomZHCnpvITEqt-AveO7NjFH6sJpSdL6TENlpytIseE5WtQ1jg';


const initialState = {
  api: '35.194.67.49',
  token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tMnp6dHQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjUxYTdhYzZlLTJkYTctMTFlYS05ZWQwLTQyMDEwYTk2MDBkZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.GFh-T-3Ghu0Eur4y7fIJk5sp1D6k78omMPNeEK0edmUaJjYI6JEQp2ZQjqV4Ab58luAIr7kT_eiMAXkzvVq0kLil_jvN1-0LysRVhAcOoch8cNX77vBQEr12Ne_b-A3ZmKCfXsdoYc_l5eq7wR1ZemPBYMtYi4P8V0j7HUHHrkbftkb1TFiVPpzaL1_d51Rj8vS-ZdcZKaEpnFmvThEVc_3oNKO723wcu3ve_90i2XHY8TaxojihFrTVqZF7xYESk4jvBtFi3_1N89qh4a_agJJEzjCN47GtWVDb_q4aYo8G8wg-NPqyqs95euYXPaxfnHJPWvuyGnfIMdgvEkspKw',
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

    default: return { ...state };
  }
};

export default reducer;
