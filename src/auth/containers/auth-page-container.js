import { connect } from 'react-redux';
import AuthPage from '../components/auth-page/auth-page';
import { modalActions } from '../actions/actions';

export default connect(
    state => ({
        isModalShown: state.auth.modal.isModalShown,
        isShowSignUp: state.auth.modal.isShowSignUp,
    }),
    dispatch => ({
        switchModalInner: () => dispatch(modalActions.switchModalInner()),
        showSignupModal: () => dispatch(modalActions.showSignUpModal()),
        showLoginModal: () => dispatch(modalActions.showLoginModal()),
        hideModal: () => dispatch(modalActions.hideModal()),
    }),
)(AuthPage);
