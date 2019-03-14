import { reduxForm } from 'redux-form';
import RoomForm from '../components/room-form/room-form';

export default reduxForm({
    form: 'roomForm',
    initialValues: {
        type: 'Single',
    },
    destroyOnUnmount: false,
})(RoomForm);
