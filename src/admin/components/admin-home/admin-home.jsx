import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HotelForm from '../../containers/hotel-form-container';

import './admin-home.scss';

class AdminHome extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
    };

    submit = (values) => {
        console.log('submit');
        const { createHotel } = this.props;
        createHotel(values);
    };

    render() {
        return (
            <div>
                <div>Admin`s home!</div>
                <HotelForm onSubmit={this.submit} />
            </div>
        );
    }
}

export default AdminHome;
