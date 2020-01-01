import store from '../Store/store';
import * as actionCreator from '../Actions/actionCreator';


const getData = (api, token) => () => {
  console.log(api);
  console.log(token);
  fetch('/server/getInfo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api, token }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((data) => { store.dispatch(actionCreator.updateData(data, api, token)); })
    .catch((err) => { console.log('Whoops', err); });
};

export default {
  getData,
};
