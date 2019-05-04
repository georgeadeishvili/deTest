import * as firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => (
  {
    type: EMAIL_CHANGED,
    payload: text
  }
);

export const passwordChanged = (text) => (
  {
    type: PASSWORD_CHANGED,
    payload: text
  }
);

export const loginUser = ({ email, password }, nav) => (
  (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, nav))
      .catch(() => loginUserFail(dispatch));
  }
);

const loginUserSuccess = (dispatch, user, nav) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  nav.navigate('Main');
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};
