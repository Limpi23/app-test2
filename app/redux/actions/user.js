import {GET_USER_START} from '../consts/actionTypes';

export const getUsers = (payload) => ({
  type: GET_USER_START,
  payload,
});
