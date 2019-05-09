import * as firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SELECT_USER,
  LOGOUT_USER,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS
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
      payload: snapshot.val().username, 
      payloadi:user.user.email
    })
  })
  nav.navigate('Main');
}

export const logoutUser = (nav) => (
  (dispatch) => {
                  dispatch({ type: LOGOUT_USER });
                  firebase
                    .auth()
                    .signOut().then(() =>
                      logoutUserSuccess(dispatch, nav)
                    )
                    .catch(() => logoutUserFail(dispatch));
                }
)

const logoutUserSuccess = (dispatch, nav) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS
  })
  nav.navigate('Login');
}

const logoutUserFail = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_FAIL
  })
}