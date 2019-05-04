import * as firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SELECT_USER
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
    payload: user,
  });
  selectUser(dispatch,user,nav);
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const selectUser = (dispatch, user, nav) => {
  console.log(user);
  firebase.database().ref('users/'+ user.user.uid).on('value', (snapshot) => {
    console.log(snapshot.val())
    dispatch({
      type: SELECT_USER,
      payload: snapshot.val().username
    })
  })
  nav.navigate('Main');
}
