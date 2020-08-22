export const INIT_APP_START          = 'INIT_APP_START';
export const INIT_APP_CHECK_PROGRESS = 'INIT_APP_CHECK_PROGRESS';
export const INIT_APP_FINISH         = 'INIT_APP_FINISH';
export const CHANGE_LOCATION         = 'CHANGE_LOCATION';
export const SET_APP_MESSAGE         = 'SET_APP_MESSAGE';
export const CLEAR_APP_MESSAGE       = 'CLEAR_APP_MESSAGE';

export const initAppStart = () => (
  {
    type: INIT_APP_START
  }
)

export const changeLocation = (location) => (
  {
    type: CHANGE_LOCATION,
    payload: location
  }
)

export const setAppMessage = (message) => (
  {
    type: SET_APP_MESSAGE,
    payload: message
  }
)

export const clearAppMessage = () => (
  {
    type: CLEAR_APP_MESSAGE
  }
)
