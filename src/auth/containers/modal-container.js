import {connect} from 'react-redux';
import Modal from '../components/modal/modal';
import {userActions} from '../actions/actions';

export default connect(
  null,
  (dispatch) => ({
    signup: (data) => dispatch(userActions.createUser(data))
  })
)(Modal);
