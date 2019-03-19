import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import SignupForm from '../components/signup-form/signup-form';

import { userActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        signup: data => dispatch(userActions.signup(data)),
    }),
)(
    reduxForm({
        form: 'signupForm',
    })(SignupForm),
);
