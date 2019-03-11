import { connect } from 'react-redux';
import ModalLogin from '../components/modal-login/modal-login';
import { userActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        login: data => dispatch(userActions.login(data)),
    }),
)(ModalLogin);
