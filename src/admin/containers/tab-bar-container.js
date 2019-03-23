import { connect } from 'react-redux';

import TabBar from '../components/tab-bar/tab-bar';

export default connect(
    state => ({
        hotelInfo: state.adminReducer.hotelInfo,
    }),
)(TabBar);
