import { connect } from 'react-redux';

import Header from '../components/header/header';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        isModalShown: state.auth.authModal.isModalShown,
    }),
    dispatch => ({
        showModal: () => dispatch(actions.showModal()),
        hideModal: () => dispatch(actions.hideModal()),
    }),
)(Header);
