import {connect} from 'react-redux';
import ModalSignup from '../components/modal-signup/modal-signup';
import {userActions} from '../actions/actions';

export default connect(
  null,
  (dispatch) => ({
    signup: (data) => dispatch(userActions.createUser(data))
  })
)(ModalSignup);
