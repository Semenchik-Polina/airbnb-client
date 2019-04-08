import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '../../../shared/components/button/button';

import './payload-tab.scss';

class PayloadTab extends PureComponent {
    static propTypes = {
        booking: PropTypes.shape({
            _id: PropTypes.string,
            user: PropTypes.shape({
                _id: PropTypes.string,
            }),
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
        }).isRequired,
        makeFinalBooking: PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.makeFinalBooking(this.props.booking, this.props.details);
    };

    render() {
        const { booking } = this.props;

        const totalPrice = moment(booking.dateTo).diff(moment(booking.dateFrom), 'd') * booking.room.cost;

        return (
            <div className="payload-tab details-tab">
                <span className="payload-tab__header details-tab__header">Payload!</span>
                <span>Total price: {totalPrice}</span>
                <div className="photo-form__buttons-container">
                    <Button
                        className="photo-form__buttons-container-item"
                        handleClick={this.handleClick}
                        color="secondary"
                    >
                        Book
                    </Button>
                </div>
            </div>
        );
    }
}

export default PayloadTab;
