import * as firebase from 'firebase';
import {
    REAUTHENTICATE_USER,
    REAUTHENTICATE_USER_SUCCESS,
    REAUTHENTICATE_USER_FAIL,
    OLD_PASSWORD_ENTERED,
    NEW_PASSWORD_ENTERED,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL
} from './types';

export const oldPasswordEntered = (text) => (
    {
        type: OLD_PASSWORD_ENTERED,
        payload: text
    }
);

export const newPasswordEntered = (text) => (
    {
        type: NEW_PASSWORD_ENTERED,
        payload: text
    }
);

const reAuthenticateUser = (dispatch, password) => {
    dispatch({ type: REAUTHENTICATE_USER });
    var user = firebase.auth().currentUser
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );
    return user.reauthenticateWithCredential(cred);
}

export const changePassword = ({ password, newPassword }, nav) => (
    (dispatch) => {
        dispatch({type: CHANGE_PASSWORD});
        reAuthenticateUser(dispatch, password)
            .then(user => reAuthenticateUserSuccess(dispatch,user,newPassword,nav))
            .catch(() => reAuthenticateUserFail(dispatch));
    }
);

const reAuthenticateUserSuccess = (dispatch,user,newPassword, nav) => {
    dispatch(
        {
            type: REAUTHENTICATE_USER_SUCCESS,
            payload: user
        }
    );
    firebase.auth().currentUser.updatePassword(newPassword)
                    .then(user => changePasswordSuccess(dispatch, user, nav))
                    .catch(() => changePasswordFail(dispatch));
}

const reAuthenticateUserFail = (dispatch) => {
    dispatch({type: REAUTHENTICATE_USER_FAIL})
}

const changePasswordSuccess = (dispatch, user, nav) => {
    dispatch(
        {
            type: CHANGE_PASSWORD_SUCCESS,
            payload: user
        }
    );
    console.log(nav)
    nav.navigate('Settings');
}

const changePasswordFail = (dispatch) => {
    dispatch({type: CHANGE_PASSWORD_FAIL});
}