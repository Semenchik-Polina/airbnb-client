import { reduxForm } from 'redux-form';
import LoginForm from '../components/login-form/login-form';

export default reduxForm({
    form: 'loginForm',
})(LoginForm);
