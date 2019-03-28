import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from '../components/login-form/login-form';

import * as actions from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        login: data => dispatch(actions.login(data)),
    }),
)(
    reduxForm({
        form: 'loginForm',
    })(LoginForm),
);
