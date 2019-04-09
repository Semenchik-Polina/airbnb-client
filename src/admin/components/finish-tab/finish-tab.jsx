import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/button';
import HotelItem from '../../../shared/components/hotel-item/hotel-item';

import './finish-tab.scss';

class FinishTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
        editHotel: PropTypes.func.isRequired,
        isEditableHotel: PropTypes.bool.isRequired,
        hotelInfo: PropTypes.shape({
            mainInfo: PropTypes.shape({
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                hotelName: PropTypes.string.isRequired,
                address: PropTypes.string.isRequired,
            }).isRequired,
            roomTypes: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    amount: PropTypes.number.isRequired,
                    capacity: PropTypes.number.isRequired,
                    cost: PropTypes.number.isRequired,
                    type: PropTypes.string.isRequired,
                }),
            ).isRequired,
            services: PropTypes.arrayOf(PropTypes.shape({
                _id: PropTypes.string.isRequired,
                facility: PropTypes.shape({
                    _id: PropTypes.string.isRequired,
                    hint: PropTypes.string,
                    imageUrl: PropTypes.string,
                    canBePaid: PropTypes.bool.isRequired,
                }),
            })).isRequired,
            photoTour: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    type: PropTypes.string.isRequired,
                    photos: PropTypes.arrayOf(
                        PropTypes.shape({
                            src: PropTypes.string.isRequired,
                        }),
                    ).isRequired,
                }),
            ).isRequired,
        }).isRequired,
    };

    handleClick = () => {
        if (this.props.isEditableHotel) {
            this.props.editHotel(this.props.hotelInfo);
        } else {
            this.props.createHotel(this.props.hotelInfo);
        }
    };

    render() {
        return (
            <div className="finish-tab">
                <HotelItem hotelInfo={this.props.hotelInfo} />
                <Button className="finish-tab__submit" handleClick={this.handleClick} color="secondary">
                    Continue
                </Button>
            </div>
        );
    }
}

export default FinishTab;
