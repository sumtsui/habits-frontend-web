import {
  AUTH_LOGIN_START,
  AUTH_TEXT_CHANGED,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_SUCCESS
} from '../actions/ActionTypes';

const initialState = {
  isLogin: false,
  email: '',
  password: '',
  error: '',
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {

    case AUTH_TEXT_CHANGED:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      }
    
    case AUTH_LOGIN_START: 
      return {
        ...state,
        loading: true,
      }

    case AUTH_LOGIN_SUCCESS: 
      return {
        ...state,
        loading: false,
        isLogin: true,
        error: ''
      }

    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false
      }

    default:
      return state;
  }
}

