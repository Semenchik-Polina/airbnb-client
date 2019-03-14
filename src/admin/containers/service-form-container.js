import { reduxForm } from 'redux-form';
import ServiceForm from '../components/service-form/service-form';

export default reduxForm({
    form: 'serviceForm',
    destroyOnUnmount: false,
    initialValues: {
        internet: 'Yes, for free',
        parking: 'Yes, for free',
        breakfast: 'Yes',
    },
})(ServiceForm);
