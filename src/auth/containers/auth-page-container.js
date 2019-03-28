import { connect } from 'react-redux';

import AuthPage from '../components/auth-page/auth-page';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        isModalShown: state.auth.authModal.isModalShown,
    }),
    dispatch => ({
        showModal: () => dispatch(actions.showModal()),
        hideModal: () => dispatch(actions.hideModal()),
    }),
)(AuthPage);
