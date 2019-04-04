import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import DetailsTab from '../components/details-tab/details-tab';

// export default connect(
//     null,
//     null,
// )(DetailsTab);

export default connect(
    null,
    null,
)(
    reduxForm({
        form: 'bookingDetailsForm',
    })(DetailsTab),
);
