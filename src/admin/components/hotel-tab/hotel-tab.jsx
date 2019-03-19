import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HotelForm from '../../containers/hotel-form-container';

class HotelTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
    };

    handleSubmit = (values) => {
        this.props.createHotel(values);
    };

    render() {
        return <HotelForm onSubmit={this.handleSubmit} />;
    }
}

export default HotelTab;
