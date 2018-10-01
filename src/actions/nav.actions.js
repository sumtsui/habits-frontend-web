import * as types from './ActionTypes';

export const onMenuOpen = () => ({
  type: types.NAV_MENU_OPEN
});

export const onMenuClose = () => ({
  type: types.NAV_MENU_CLOSE
});

export const onLogoutPromptOpen = () => ({
  type: types.NAV_LOGOUT_PROMPT_OPEN
});

export const onLogoutPromptClose = () => ({
  type: types.NAV_LOGOUT_PROMPT_CLOSE
});