import { reduxForm } from 'redux-form';
import HotelForm from '../components/hotel-form/hotel-form';

export default reduxForm({
    form: 'hotelForm',
})(HotelForm);
