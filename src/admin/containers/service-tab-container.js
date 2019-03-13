import {connect} from 'react-redux';
import ServiceTab from '../components/service-tab/service-tab';
import {adminActions} from '../actions/actions';

export default connect(
    null,
    (dispatch) => ({
        addServices: (data) => dispatch(adminActions.addServices(data))
    })
)(ServiceTab);
