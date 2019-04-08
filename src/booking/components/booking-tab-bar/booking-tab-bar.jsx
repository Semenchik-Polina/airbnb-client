import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import Moment from 'moment';
import classNames from 'classNames';

import {
    withRouter, Route, NavLink, Redirect,
} from 'react-router-dom';

import BeatLoader from 'react-spinners/BeatLoader';
import DetailsTab from '../../containers/details-tab-container';
import PayloadTab from '../../containers/payload-tab-container';
import SideArrow from '../../../shared/components/side-arrow/side-arrow';
import Timer from '../timer/timer';

import history from '../../../shared/tools/history';

import './booking-tab-bar.scss';

class BookingTabBar extends PureComponent {
    static defaultProps = {
        booking: null,
    };

    static propTypes = {
        isDetailesFormFilled: PropTypes.bool.isRequired,
        fetchBooking: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        booking: PropTypes.shape({
            _id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
            requestedAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(Moment)]).isRequired,
            guests: PropTypes.number,
            room: PropTypes.shape({
                _id: PropTypes.string,
                type: PropTypes.string,
                capacity: PropTypes.number,
                cost: PropTypes.number,
                services: PropTypes.arrayOf(PropTypes.string),
            }),
            hotel: PropTypes.shape({
                _id: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                hotelName: PropTypes.string.isRequired,
            }),
            totalPrice: PropTypes.number,
            dateFrom: PropTypes.instanceOf(Date),
            dateTo: PropTypes.instanceOf(Date),
        }),
    };

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.fetchBooking(id);
    };

    renderRedirectToHotels = () => {
        history.push('/hotels');
    }

    renderRiderect = () => {
        const { id } = this.props.match.params;
        return <Redirect to={`/books/${id}/details`} />;
    };

    render() {
        const {
            match: {
                params: { id },
            },
            booking,
            isDetailesFormFilled,
        } = this.props;

        // const {
        //     isMainInfoFilled, isRoomFormFilled,
        // } = this.props;

        const payloadTabClasses = classNames('booking-tab-bar__links-item', {
            'booking-tab-bar__links-item_disabled': !isDetailesFormFilled,
        });

        // const serviceTabClasses = classNames('tab-bar__links-item', {
        //     'tab-bar__links-item_disabled': !isRoomFormFilled,
        // });

        if (booking && booking._id === id) {
            return (
                <div className="booking-tab-bar">
                    <ul className="booking-tab-bar__links">
                        <li>
                            <NavLink className="booking-tab-bar__links-item" exact to={`/books/${id}/details`}>
                                Details
                            </NavLink>
                        </li>
                        <span>
                            <SideArrow />
                        </span>
                        <li>
                            <NavLink className={payloadTabClasses} exact to={`/books/${id}/payload`}>
                                Payload
                            </NavLink>
                        </li>
                        <span>
                            <Timer date={booking.requestedAt} onTimeout={this.renderRedirectToHotels} />
                        </span>
                    </ul>
                    <div className="booking-tab-bar__route">
                        <Route path="/books/:id" component={this.renderRiderect} />
                        <Route exact path="/books/:id/details" component={DetailsTab} />
                        <Route exact path="/books/:id/payload" component={PayloadTab} />
                    </div>
                </div>
            );
        }
        return (
            <div className="hotel-page hotel-page__loader">
                <BeatLoader sizeUnit="px" size={20} color="#2B9E86" loading />
            </div>
        );
    }
}

export default withRouter(BookingTabBar);
