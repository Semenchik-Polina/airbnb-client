import { connect } from 'react-redux';

import Menu from '../components/menu/menu';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        user: state.auth.user,
    }),
    dispatch => ({
        logout: () => dispatch(actions.logout()),
    }),
)(Menu);
