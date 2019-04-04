import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import adminReducer from '../../admin/reducers';
import userReducer from '../../user/reducers';
import bookingReducer from '../../booking/reducers/booking';
import user from '../../auth/reducers';
import hotelPage from '../../hotel/reducers';

// i shoud have an adminReducer OR a userReducer
export default combineReducers({
    form: formReducer,
    adminReducer,
    userReducer,
    auth: user,
    hotelPage,
    bookingReducer,
});
