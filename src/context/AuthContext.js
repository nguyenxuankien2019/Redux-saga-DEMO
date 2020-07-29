import createDataContext from './CreateDataContext';
import trackApi from '../../track-server/api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        default:
            return state;

    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        //make api request to sign up with that email and password
        try {
            const response = await trackApi.post('/signup', { email, password });
            console.log('response 200: ',response);

        } catch (err) {
            console.log('err 400',err.message);
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up!'});
        }
        // if we sign up, modify our state and say that we are authenticated

        //if signing up fails, we probably need to reflect an error message 

        //somewhere
    }
}

const signin = (dispatch) => {
    return  ({ email, password }) => {
        //try to signin 
       
        // handle success by updating state

        //handle failure by showing error message 

    }
}

const signout = (dispatch) => {
    return () => {
        //somehow sign out!!
    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout },
    { isSignedIn: false, errorMessage: '' }
)