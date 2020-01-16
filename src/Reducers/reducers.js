import * as type from '../Actions/actionTypes';

// const apiServer = '35.236.202.52';
// const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tZ3cybDkiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImRlOWZmMjI4LTJiZWItMTFlYS04MWFlLTQyMDEwYTk2MGZkZiIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmRlZmF1bHQifQ.f371sW2bePkV3L5fdQLptzqWRUTLdZsZeTWgX4Fdr4bV2ZvBI-53UNv-o3rPZ-5tKDxX-eT-1JLIGpuIUvd6VV3odsMJnQs9kCd18SV-ksZf1acdqIccEgyISGga9D9E4lv7Fd3iIJIFbIB68eOZvHi28Z9klyjd4FTLD9tMbsC7hidcfBMAGziwoudBbPE2qz9clMkT-Sa3iNDxwRhmpzcVtSolHsKfTGuOiXYw1Low33lXPEix3vruo6OXXh06vue22f5_A8iFTCYyL_FbogNBKxNuXNHYcPYltomZHCnpvITEqt-AveO7NjFH6sJpSdL6TENlpytIseE5WtQ1jg';


const initialState = {
  api: '',
  token: '',
  page: 'LANDING',
  data: {},
  selected: {},
  view: 'Cards',
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
      });

    case type.GOTO:
      return ({
        ...state, page: action.payload,
      });

    case type.SELECT:
      // console.log(action.payload);

      // let element = e.target;
      while (!action.payload.el.classList.contains('card')) action.payload.el = action.payload.el.parentElement;

      const temp = document.getElementById('selected');
      if (temp) temp.removeAttribute('id');
      action.payload.el.setAttribute('id', 'selected');
      return ({
        ...state, selected: action.payload.props,
      });

    case type.CHANGE_VIEW:
      const viewSwitches = document.getElementsByClassName('viewSwitch');
      for (let i = 0; i < viewSwitches.length; i += 1) {
        if (viewSwitches[i].id !== action.payload) viewSwitches[i].checked = false;
      }

      return ({
        ...state, view: action.payload,
      });

    default: return { ...state };
  }
};

export default reducer;
