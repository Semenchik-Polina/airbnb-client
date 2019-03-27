import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import HotelItem from '../../../shared/components/hotel-item/hotel-item';

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

    componentDidMount = () => {
        // id from url or props?
        console.log(this.props.match.params.id);
        //  this.props.fetchHotel(this.props.match.params.id);
    };

    render() {
        // not return anything if there is no hotel info
        // or return spinner?
        if (this.props.hotelInfo) {
            return <HotelItem hotelInfo={this.props.hotelInfo} />;
        }
        return <div>Hotel!</div>;
    }
}

export default withRouter(HotelPage);
