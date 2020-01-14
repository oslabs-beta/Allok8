import { updateData } from '../Actions/actionCreator';


const getData = (api, token) => dispatch => {

  fetch('/server/getInfo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api, token }),
  })
    .then((res) => res.json())
    .then((data) => { dispatch(updateData(data, api, token)); })
    .catch((err) => { console.log('Whoops', err); });
};

export default {
  getData,
};
