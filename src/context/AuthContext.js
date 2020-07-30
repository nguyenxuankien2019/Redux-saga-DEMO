import { AsyncStorage } from 'react-native';

import createDataContext from './CreateDataContext';
import trackApi from '../../track-server/api/tracker';
// import AsyncStorage from ' @react-native-community/async-storage';
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { ...state, token: action.payload };
        case 'signin':
            return { ...state, token: action.payload };
        case 'signout':
            return { token: null,errorMessage: "" };
        case 'clear_error_message':
            return { errorMessage: "" };
        default:
            return state;

    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

}
const clear_token = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_token' });
        //somehow sign out!!
    }
}

const signup = (dispatch) => {
    return async ({ email, password }, callback) => {
        //make api request to sign up with that email and password
        try {
            const response = await trackApi.post('/signup', { email, password });
            console.log('response 200: ', response);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token });

            if (callback) {
                callback();
            }
            //navigate to main flow
        } catch (err) {
            console.log('err 400', err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up!' });
        }
        // if we sign up, modify our state and say that we are authenticated

        //if signing up fails, we probably need to reflect an error message 

        //somewhere
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        //try to signin 
        try {
            const response = await trackApi.post('/signin', { email, password });
            console.log('response 200: ', response);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate("TrackList");

            //navigate to main flow
        } catch (err) {
            console.log('err 400', err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in!' });
        }
        // handle success by updating state

        //handle failure by showing error message 

    }
}

const signout = dispatch => async () => {
        await AsyncStorage.removeItem('token');
        //somehow sign out!!
        dispatch({ type: 'signout' });
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage,signout },
    { isSignedIn: false, errorMessage: '', token: null }
)