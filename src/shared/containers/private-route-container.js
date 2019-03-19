import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PrivateRoute from '../components/private-route/private-route';

const mapStateToProps = state => ({
    isLoggedIn: Boolean(Object.entries(state.auth.user).length),
    role: Object.entries(state.auth.user).length ? state.auth.user.role : '',
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
