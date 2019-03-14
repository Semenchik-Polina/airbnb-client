import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HotelForm from '../../containers/hotel-form-container';
import './hotel-tab.scss';

class HotelTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
    };

    handleSubmit = (values) => {
        console.log(values);
        this.props.createHotel(values);
    };

    render() {
        return (
            <div className="hotel-tab">
                <HotelForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default HotelTab;
