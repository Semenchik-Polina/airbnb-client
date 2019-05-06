import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { withRouter, Route, Redirect } from 'react-router-dom';

import Loader from '../../../shared/components/loader/loader';
import DetailsTab from '../../containers/booking-details-container';

import history from '../../../shared/tools/history';

import './booking-page.scss';

class BookingPage extends PureComponent {
    static defaultProps = {
        booking: null,
    };

    static propTypes = {
        fetchBooking: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        booking: PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.string,

            requestedAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(Moment)]).isRequired,
            guests: PropTypes.number,
            room: PropTypes.shape({
                id: PropTypes.string,
                type: PropTypes.string,
                capacity: PropTypes.number,
                cost: PropTypes.number,
            }),
            hotel: PropTypes.shape({
                id: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                facilities: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        isPaidPerRoom: PropTypes.bool,
                        canBePaid: PropTypes.bool.isRequired,
                        price: PropTypes.number,
                    }),
                ),
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
    };

    redirectToMainForm = () => {
        const { id } = this.props.match.params;
        return <Redirect to={`/books/${id}/details`} />;
    };

    render() {
        const {
            match: {
                params: { id },
            },
            booking,
        } = this.props;

        if (booking && booking.id === id) {
            return (
                <div className="booking-page">
                    <div className="booking-page__route">
                        <Route path="/books/:id" component={this.redirectToMainForm} />
                        <Route exact path="/books/:id/details" component={DetailsTab} />
                    </div>
                </div>
            );
        }
        return <Loader />;
    }
}

export default withRouter(BookingPage);
