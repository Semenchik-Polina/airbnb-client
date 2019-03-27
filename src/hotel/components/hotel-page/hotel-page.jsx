import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import BeatLoader from 'react-spinners/BeatLoader';
import HotelItem from '../../../shared/components/hotel-item/hotel-item';
import Button from '../../../shared/components/button/button';
import Modal from '../../../auth/components/modal/modal';

import './hotel-page.scss';

// const override = css`
//     display: flex;
//     justifyContent: center;
//     margin: auto;
//     border-color: red;
// `;

class HotelPage extends PureComponent {
    static defaultProps = {
        hotelInfo: null,
    };

    static propTypes = {
        fetchHotel: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        hotelInfo: PropTypes.shape({
            id: PropTypes.string,
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
            services: PropTypes.shape({
                internet: PropTypes.string.isRequired,
                parking: PropTypes.string.isRequired,
                breakfast: PropTypes.string.isRequired,
                facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
            }).isRequired,
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
        }),
    };

    state = {
        isModalShown: true,
    };

    componentDidMount = () => {
        this.props.fetchHotel(this.props.match.params.id);
    };

    render() {
        // not return anything if there is no hotel info
        // or return spinner?
        if (this.props.hotelInfo && this.props.hotelInfo.id === this.props.match.params.id) {
            return (
                <div className="hotel-page">
                    <HotelItem hotelInfo={this.props.hotelInfo} />
                    <div className="hotel-page__booking">
                        <div className="hotel-page__booking-price">
                            <span className="hotel-page__booking-price-range">
                                ${_.minBy(this.props.hotelInfo.roomTypes, 'cost').cost}-
                                {_.maxBy(this.props.hotelInfo.roomTypes, 'cost').cost}
                            </span>
                            <span className="hotel-page__booking-price-time-unit">/night</span>
                        </div>
                        <Button className="hotel-page__booking-button" color="purple">
                            Booking
                        </Button>
                    </div>
                    {this.state.isModalShown && <Modal />}
                </div>
            );
        }
        return (
            <div className="hotel-page hotel-page__loader">
                <BeatLoader sizeUnit="px" size={80} color="#2B9E86" loading />
            </div>
        );
    }
}

export default withRouter(HotelPage);
