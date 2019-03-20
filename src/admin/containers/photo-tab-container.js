import { connect } from 'react-redux';

import PhotoTab from '../components/photo-tab/photo-tab';

export default connect(
    state => ({
        photoItems: state.adminReducer.hotelInfo.photos,
    }),
)(PhotoTab);
