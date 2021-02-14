import {GET_USER_START, GET_USER_SUCCESS} from '../consts/actionTypes';

export default function (state, action) {
  switch (action.type) {
    case GET_USER_START:
      return {...state, user: null, error: null};
      break;
    case GET_USER_SUCCESS:
      return {...state, user: action.results};
      break;
    default:
      return {...state};
  }
}
