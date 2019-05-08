import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhotoItem from '../../../shared/components/photo-item/photo-item';

import FilterPanel from '../../containers/filter-panel-container';
import history from '../../../shared/tools/history';
import devideArray from '../../../shared/tools/devideArray';

import './user-home.scss';

class UserHome extends PureComponent {
    static propTypes = {
        hotels: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
                city: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                photos: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.string.isRequired,
                    }),
                ),
            }),
        ).isRequired,
        fetchHotels: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchHotels(this.props.filters);
    }

    redirectToHotelPage = id => () => {
        history.push(`/hotels/${id}`);
    };

    render() {
        return (
            <div className="user-home">
                <FilterPanel />
                {this.props.hotels.length > 0 && (
                    <section className="user-home__hotels">
                        <span className="user-home__hotels-header">Hotels</span>
                        <div className="user-home__hotels-containers">
                            {devideArray(this.props.hotels, 3).map((container, index) => (
                                <div key={index} className="user-home__hotels-containers-wrapper">
                                    {container.map(hotel => (
                                        <div key={hotel.id} className="user-home__hotels-containers-wrapper-item">
                                            <PhotoItem
                                                className="user-home__hotels-containers-wrapper-item-link"
                                                photos={hotel.photos}
                                                handleClick={this.redirectToHotelPage(hotel.id)}
                                            />
                                            <span className="user-home__hotels-containers-wrapper-item-name">
                                                {hotel.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        );
    }
}

export default UserHome;
