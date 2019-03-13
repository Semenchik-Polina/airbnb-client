import { reduxForm } from 'redux-form';
import ServiceForm from '../components/service-form/service-form';

export default reduxForm({
    form: 'serviceForm',
})(ServiceForm);
