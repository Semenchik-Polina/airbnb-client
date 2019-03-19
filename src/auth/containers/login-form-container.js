import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from '../components/login-form/login-form';

import { userActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        login: data => dispatch(userActions.login(data)),
    }),
)(
    reduxForm({
        form: 'loginForm',
    })(LoginForm),
);
