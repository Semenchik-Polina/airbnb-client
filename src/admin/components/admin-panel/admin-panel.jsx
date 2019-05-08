import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Tool from '../../../shared/components/tool/tool';
import PhotoItem from '../../../shared/components/photo-item/photo-item';

import devideArray from '../../../shared/tools/devideArray';
import Hotel from '../../../shared/models/hotel';

import './admin-panel.scss';

class AdminPanel extends PureComponent {
    static propTypes = {
        hotels: PropTypes.arrayOf(
            PropTypes.instanceOf(Hotel),
        ).isRequired,

        fetchHotels: PropTypes.func.isRequired,
        removeHotel: PropTypes.func.isRequired,
        startEditingHotel: PropTypes.func.isRequired,
        startCreatingHotel: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchHotels();
    }

    removeHotel = hotel => () => {
        this.props.removeHotel(hotel.id);
    };

    startEditingHotel = hotel => () => {
        this.props.startEditingHotel(hotel.id);
    };

    startCreatingHotel = () => {
        this.props.startCreatingHotel();
    };

    render() {
        return (
            <div className="admin-panel">
                <div className="admin-panel__activity">
                    <div className="admin-panel__activity-image" />
                    <button type="button" className="admin-panel__activity-link" onClick={this.startCreatingHotel}>
                        Create an awesome new hotel
                    </button>
                </div>
                {this.props.hotels.length > 0 && (
                    <section className="admin-panel__hotels">
                        <span className="admin-panel__hotels-header">Hotels</span>
                        <div className="admin-panel__hotels-containers">
                            {devideArray(this.props.hotels, 3).map((container, index) => (
                                <div key={index} className="admin-panel__hotels-containers-wrapper">
                                    {container.map(hotel => (
                                        <div key={hotel.id} className="admin-panel__hotels-containers-wrapper-item">
                                            <Tool
                                                src="/images/tools/delete.png"
                                                className="admin-panel__hotels-containers-wrapper-item-delete"
                                                handleClick={this.removeHotel(hotel)}
                                            />
                                            <Tool
                                                src="/images/tools/edit.png"
                                                className="admin-panel__hotels-containers-wrapper-item-edit"
                                                handleClick={this.startEditingHotel(hotel)}
                                            />
                                            <PhotoItem photos={hotel.photos} />
                                            <span className="admin-panel__hotels-containers-wrapper-item-name">
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

export default AdminPanel;
