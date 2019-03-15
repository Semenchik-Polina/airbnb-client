import { connect } from 'react-redux';
import Menu from '../components/menu/menu';
import { userActions } from '../actions/actions';

export default connect(
    state => ({
        user: state.auth.user,
    }),
    dispatch => ({
        logout: () => dispatch(userActions.logout()),
    }),
)(Menu);
