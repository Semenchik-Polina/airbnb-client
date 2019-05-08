import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/button';
import HotelItem from '../../../shared/components/hotel-item/hotel-item';
import Hotel from '../../../shared/models/hotel';

import './finish-tab.scss';

class FinishTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
        editHotel: PropTypes.func.isRequired,
        isEditableHotel: PropTypes.bool.isRequired,
        hotel: PropTypes.instanceOf(Hotel).isRequired,
    };

    handleClick = () => {
        if (this.props.isEditableHotel) {
            this.props.editHotel(this.props.hotel);
        } else {
            this.props.createHotel(this.props.hotel);
        }
    };

    render() {
        return (
            <div className="finish-tab">
                <HotelItem hotel={this.props.hotel} />
                <Button className="finish-tab__submit" handleClick={this.handleClick} color="secondary">
                    Continue
                </Button>
            </div>
        );
    }
}

export default FinishTab;
