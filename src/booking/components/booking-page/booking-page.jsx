import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';

import { withRouter, Route, Redirect } from 'react-router-dom';

import Loader from '../../../shared/components/loader/loader';
import EditDetailsTab from '../../containers/booking-details-approve-container';
import ShiftDetailsTab from '../../containers/booking-details-edit-container';

import Booking from '../../../shared/models/booking';
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
        booking: PropTypes.instanceOf(Booking),
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
                        <Route
                            exact
                            path="/books/:id/details"
                            component={booking.isApproved ? ShiftDetailsTab : EditDetailsTab}
                        />
                    </div>
                </div>
            );
        }
        return <Loader />;
    }
}

export default withRouter(BookingPage);
