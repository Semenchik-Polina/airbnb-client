import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import Loader from '../../../shared/components/loader/loader';
import HotelItem from '../../../shared/components/hotel-item/hotel-item';
import Button from '../../../shared/components/button/button';
import ModalBooking from '../../containers/modal-booking-container';

import { ROLES } from '../../../shared/constants/roles';
import Hotel from '../../../shared/models/hotel';

import './hotel-page.scss';

class HotelPage extends PureComponent {
    static defaultProps = {
        hotelInfo: null,
        user: null,
    };

    static propTypes = {
        user: PropTypes.shape({
            _id: PropTypes.string,
            email: PropTypes.string,
            role: PropTypes.string,
        }),
        fetchHotel: PropTypes.func.isRequired,
        isModalShown: PropTypes.bool.isRequired,
        showModal: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        minPrice: PropTypes.number.isRequired,
        maxPrice: PropTypes.number.isRequired,
        hotel: PropTypes.instanceOf(Hotel),
    };

    componentDidMount = () => {
        this.props.fetchHotel(this.props.match.params.id);
    };

    handleBookingClick = () => {
        this.props.showModal();
    };

    handleModalClose = () => {
        this.props.hideModal();
    };

    render() {
        const {
            hotel, user, maxPrice, minPrice, isModalShown, match,
        } = this.props;

        if (hotel && hotel.id === match.params.id) {
            return (
                <div className="hotel-page">
                    <HotelItem hotel={hotel} />
                    {user && user.role !== ROLES.ADMIN && (
                        <div className="hotel-page__booking">
                            <div className="hotel-page__booking-price">
                                <span className="hotel-page__booking-price-range">
                                    ${minPrice}-{maxPrice}
                                </span>
                                <span className="hotel-page__booking-price-time-unit">/night</span>
                            </div>
                            <Button
                                className="hotel-page__booking-button"
                                color="purple"
                                handleClick={this.handleBookingClick}
                            >
                                Booking
                            </Button>
                        </div>
                    )}
                    {isModalShown && <ModalBooking onClose={this.handleModalClose} />}
                </div>
            );
        }
        return <Loader />;
    }
}

export default withRouter(HotelPage);
