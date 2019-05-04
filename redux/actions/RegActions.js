import * as firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    RE_PASSWORD_CHANGED,
    USERNAME_CHANGED,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL
} from './types';

export const usernameChanged = (text) => (
    {
        type: USERNAME_CHANGED,
        payload: text
    }
)

export const regEmailChanged = (text) => (
  {
    type: EMAIL_CHANGED,
    payload: text
  }
);

export const regPasswordChanged = (text) => (
  {
    type: PASSWORD_CHANGED,
    payload: text
  }
);

export const regRePasswordChanged = (text) => (
  {
    type: RE_PASSWORD_CHANGED,
    payload: text
  }
);

export const registerUser = ({ email, password, rePassword }, nav) => {
    (password === rePassword) && (
  (dispatch) => {
    dispatch({ type: REGISTER_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, nav))
      .catch(() => loginUserFail(dispatch));
  })
};

const registerUserSuccess = (dispatch, user, nav) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });
  nav.navigate('Login');
};

const registerUserFail = (dispatch) => {
  dispatch({
    type: REGISTER_USER_FAIL
  });
};
