import { reduxForm } from 'redux-form';
import SignupForm from '../components/signup-form/signup-form';

export default reduxForm({
    form: 'signupForm',
})(SignupForm);
