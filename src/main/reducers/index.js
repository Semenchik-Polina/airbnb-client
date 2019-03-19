import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import adminReducer from '../../admin/reducers/index';
import user from '../../auth/reducers/index';

export default combineReducers({
    form: formReducer,
    adminReducer,
    auth: user,
});
