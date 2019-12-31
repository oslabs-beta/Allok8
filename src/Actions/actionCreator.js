import * as type from './actionTypes';

export const getData = (api, token) => ({
  type: type.GET_DATA,
  payload: { api, token },
});

export const updateData = (data, api, token) => ({
  type: type.UPDATE_DATA,
  payload: { data, api, token },
});