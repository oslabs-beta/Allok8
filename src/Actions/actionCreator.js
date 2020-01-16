import * as type from './actionTypes';

export const saveData = (api, token) => ({
  type: type.SAVE_DATA,
  payload: { api, token },
});

export const updateData = (data, api, token) => ({
  type: type.UPDATE_DATA,
  payload: { data, api, token },
});

export const goTo = (str) => ({
  type: type.GOTO,
  payload: str,
});

export const select = (obj) => ({
  type: type.SELECT,
  payload: obj,
});

export const changeView = (str) => ({
  type: type.CHANGE_VIEW,
  payload: str,
});
