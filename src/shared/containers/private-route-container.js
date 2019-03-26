import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PrivateRoute from '../components/private-route/private-route';

const mapStateToProps = state => ({
    isLoggedIn: !!state.auth.user,
    role: state.auth.user ? state.auth.user.role : '',
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
