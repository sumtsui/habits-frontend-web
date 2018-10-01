import {
  NAV_MENU_OPEN,
  NAV_MENU_CLOSE,
  NAV_LOGOUT_PROMPT_OPEN,
  NAV_LOGOUT_PROMPT_CLOSE
} from '../actions/ActionTypes';

const initialState = {
  menuOpen: false,
  logoutPromptOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case NAV_MENU_OPEN:
      return {
        ...state,
        menuOpen: true
      }
    
    case NAV_MENU_CLOSE:
      return {
        ...state,
        menuOpen: false
      }

    case NAV_LOGOUT_PROMPT_OPEN:
      return {
        ...state,
        logoutPromptOpen: true
      }
    
    case NAV_LOGOUT_PROMPT_CLOSE:
      return {
        ...state,
        logoutPromptOpen: false
      }

    default:
      return state;
  }
}