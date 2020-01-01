import store from '../Store/store';
import { updateData } from '../Actions/actionCreator';


const getData = (api, token) => () => {
  // console.log(api);
  // console.log(token);
  // todo add route
  fetch('/server/getInfo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api, token }),
  })
    .then((res) => res.json())
    .then((data) => { store.dispatch(updateData(data, api, token)); })
    .catch((err) => { console.log('Whoops', err); });
};

export default {
  getData,
};
